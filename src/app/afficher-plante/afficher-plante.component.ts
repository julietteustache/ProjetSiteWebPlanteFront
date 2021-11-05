import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantesComponent } from '../plantes/plantes.component';
import { Plante } from '../plante';
import { Plantespecial } from '../plantespecial';
import { Router } from '@angular/router';
import { UserConnect } from '../user-connect';
import { SubscribeService } from '../services/subscribe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-afficher-plante',
  templateUrl: './afficher-plante.component.html',
  styleUrls: ['./afficher-plante.component.css']
})
export class AfficherPlanteComponent implements OnInit {
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
  commentaire: any;
  nvCom: any;
  p: Plante = new Plante();

  user:any;
  idUser:any;
  score:any;

  constructor(private http: HttpClient, public laplante: Plantespecial, private uConnect:AuthService, private route: Router) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
    this.score=this.user.score;

    
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
    this.recupPlante();
    this.recupCom();
  }

  recupPlante(): void {
    this.http.get('http://localhost:8085/plante/' + this.idPlante).subscribe({
      next: (data) => {
        this.plante = data;
        if (this.plante == null) {
          this.route.navigateByUrl('liste_plantes') //Pour rediriger vers la liste des plantes
        }
      },
      error: (err) => { console.log(err) }
    });
  }
  recupCom(): void {
    this.http.get('http://localhost:8085/getcomplante/' + this.idPlante).subscribe({
      next: (data) => {
        this.commentaire = data;
      },
      error: (err) => { console.log(err) }

    });
  }
  newCom(val: any): void {
    let commentaire = {commentaire: val.commentaire, auteur:this.user, plante:this.p}
    this.http.post('http://localhost:8085/newcom', commentaire).subscribe({
      next: (data) => {
        this.nvCom = data;
        this.laplante.plante=this.p;
        this.route.navigateByUrl('afficher_plante');
        this.score = this.score + 10;
        this.user.score=this.score
        this.http.put('http://localhost:8085/modifuser/' + this.idUser, this.user).subscribe({
          next: (data) => {
            this.user = data;
          },
          error: (err) => { console.log(err) }
        })
      },
      error: (err) => { console.log(err) }

    });
  }

  goModif(): void {
    this.laplante.plante=this.p;
    this.route.navigateByUrl('modif_plante');
  }

}
