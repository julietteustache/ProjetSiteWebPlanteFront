import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantesComponent } from '../plantes/plantes.component';
import { Plante } from '../plante';
import { Plantespecial } from '../plantespecial';
import { Router } from '@angular/router';

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

  user = { id: 2, nom: 'Azer' };

  constructor(private http: HttpClient, public laplante: Plantespecial, private route: Router) { }

  ngOnInit(): void {
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
    // let commentaire = {commentaire: val.commentaire, user: {id: this.user.id}}
    this.http.post('http://localhost:8085/newcom', val).subscribe({
      next: (data) => {
        this.nvCom = data;
      },
      error: (err) => { console.log(err) }

    });
  }
}
