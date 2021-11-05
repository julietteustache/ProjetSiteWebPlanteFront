import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantespecial } from '../plantespecial';
import { Plante } from '../plante';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modif-plante',
  templateUrl: './modif-plante.component.html',
  styleUrls: ['./modif-plante.component.css']
})
export class ModifPlanteComponent implements OnInit {
  plante: any;
  idPlante: any;
  categorie: any;
  sousCategorie: any;
  espece: any;
  description: any;
  calendrier: any;
  arrosage: any;
  prix: any;
  exposition: any;
  p: Plante = new Plante();

  user: any;
  score: any;
  idUser: any;

  constructor(private http: HttpClient, public laplante: Plantespecial, private route: Router, private uConnect: AuthService) { }

  ngOnInit(): void {
    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;
    this.p = this.laplante.plante;
    this.idPlante = this.p.idPlante;
    this.categorie = this.p.categorie;
    this.sousCategorie = this.p.sousCategorie;
    this.espece = this.p.espece;
    this.description = this.p.description;
    this.calendrier = this.p.calendrier;
    this.arrosage = this.p.arrosage;
    this.prix = this.p.prix;
    this.exposition = this.p.exposition;
  }

  modifPlante(val: any): void {
    console.log("test1"+this.user);
    this.http.put('http://localhost:8085/modifplante/' + this.idPlante, val).subscribe({
      next: (data) => {
        console.log("test2"+this.user);
        this.plante = data;
        this.stock(this.plante);
        this.laplante.plante = this.p; //A corriger, pour l'instant ça ne fait qu'afficher l'ancienne version non actualisée
        this.route.navigateByUrl('afficher_plante');
        this.score = this.score+50;
        this.user.score=this.score;
        console.log("test3"+this.user);
        localStorage.setItem('userConnect', JSON.stringify(this.user));
        console.log(this.user);
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
  
  stock(p:any): void {
    this.laplante.setPlante(p);
  }


}
