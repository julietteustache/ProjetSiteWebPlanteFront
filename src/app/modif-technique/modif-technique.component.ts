import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Technique } from '../technique';
import { Techniquespecial } from '../techniquespecial';

@Component({
  selector: 'app-modif-technique',
  templateUrl: './modif-technique.component.html',
  styleUrls: ['./modif-technique.component.css']
})
export class ModifTechniqueComponent implements OnInit {

  technique:any;

  idTechnique:any;
  nom:any;
  description:any;
  image:any;

  t: Technique=new Technique();

  user:any;
  score:any;
  idUser:any;

  mediaUrl:any;

  constructor(private http:HttpClient, private route:Router, public latechnique:Techniquespecial, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;

    this.t=this.latechnique.technique;
    this.idTechnique=this.t.idTechnique;
    this.nom=this.t.nom;
    this.description=this.t.description;
    this.image=this.t.image;
  }

  modifTechnique(val: any): void {
    //console.log("test1"+this.user);
    if (this.mediaUrl!=null) {
      val.image=window.btoa(this.mediaUrl);
    }
    else {
      val.image=this.image;
    }
    this.http.put('http://localhost:8085/modiftechnique/' + this.idTechnique, val).subscribe({
      next: (data) => {
        //console.log("test2"+this.user);
        this.technique = data;
        this.stock(this.technique);
        this.latechnique.technique = this.technique; //A corriger, pour l'instant ça ne fait qu'afficher l'ancienne version non actualisée
        this.route.navigateByUrl('afficher_technique');
        this.score = this.score+50;
        this.user.score=this.score;
        //console.log("test3"+this.user);
        localStorage.setItem('userConnect', JSON.stringify(this.user));
        //console.log(this.user);
        this.http.put('http://localhost:8085/modifuser/' + this.idUser, this.user).subscribe({
          next: (data) => {
            this.user = data;
          },
          error: (err) => { console.log(err) }
        })
      },
        error: (err) => { console.log(err) }
      })


  }
  
  stock(t:any): void {
    this.latechnique.setTechnique(t);
  }

  onFileChanged(event:any):any{
    const reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event2) => {
      this.mediaUrl=reader.result;
    };
  }


}
