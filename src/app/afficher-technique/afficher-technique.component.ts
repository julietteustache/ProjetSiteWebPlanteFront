import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Technique } from '../technique';
import { TechniquesComponent } from '../techniques/techniques.component';
import { Techniquespecial } from '../techniquespecial';

@Component({
  selector: 'app-afficher-technique',
  templateUrl: './afficher-technique.component.html',
  styleUrls: ['./afficher-technique.component.css']
})
export class AfficherTechniqueComponent implements OnInit {
  
  technique:any;
  
  user:any;
  idUser:any;
  score:any;

  t:Technique=new Technique();
  idTechnique:any;
  nom:any;
  description:any;

  nvCom:any;
  commentaire:any;


  constructor(private http:HttpClient, private route:Router, private uConnect:AuthService, public latechnique:Techniquespecial) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
    this.score=this.user.score;

    this.t=this.latechnique.getTechnique();
    this.idTechnique=this.t.idTechnique;
    this.nom=this.t.nom;
    this.description=this.t.description;
    this.recupTechnique();
    this.recupCom();

  }

  recupTechnique() : void {
    this.http.get('http://localhost:8085/techniques/' + this.idTechnique).subscribe({
      next: (data) => {
        this.technique = data;
      },
      error: (err) => { console.log(err) }
    });
  }

  recupCom(): void {
    this.http.get('http://localhost:8085/getcomtechnique/' + this.idTechnique).subscribe({
      next: (data) => {
        this.commentaire = data;
      },
      error: (err) => { console.log(err) }

    });
  }
  newCom(val: any): void {
    let commentaire = {commentaire: val.commentaire, auteur:this.user, technique:this.t}
    this.http.post('http://localhost:8085/newcom', commentaire).subscribe({
      next: (data) => {
        this.nvCom = data;
        this.latechnique.technique=this.t;
        this.route.navigateByUrl('afficher_technique');
        this.score = this.score + 10;
        this.user.score=this.score;
        localStorage.setItem('userConnect', JSON.stringify(this.user));
        this.http.put('http://localhost:8085/modifuser/' + this.idUser, this.user).subscribe({
          next: (data) => {
            this.user = data;
            this.recupCom();
          },
          error: (err) => { console.log(err) }
        })
      },
      error: (err) => { console.log(err) }

    });
  }

  goModif(): void {
    this.latechnique.technique=this.t;
    this.route.navigateByUrl('modif_technique');
  }

}
