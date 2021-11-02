import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantesComponent } from '../plantes/plantes.component';
import { Plante } from '../plante';
import { Plantespecial } from '../plantespecial';

@Component({
  selector: 'app-afficher-plante',
  templateUrl: './afficher-plante.component.html',
  styleUrls: ['./afficher-plante.component.css']
})
export class AfficherPlanteComponent implements OnInit {
  plante:any;
  idPlante:any;
  categorie:any;
  sousCategorie:any;
  espece:any;
  description:any;
  calendrier:any;
  arrosage:any;
  prix:any;
  exposition:any;
  p: Plante=new Plante();
  constructor(private http:HttpClient, public laplante:Plantespecial) {}

  ngOnInit(): void {
    this.p=this.laplante.plante;

    this.idPlante=this.p.idPlante;
    this.categorie=this.p.categorie;
    this.sousCategorie=this.p.sousCategorie;
    this.espece=this.p.espece;
    this.description=this.p.description;
    this.calendrier=this.p.calendrier;
    this.arrosage=this.p.arrosage;
    this.prix=this.p.prix;
    this.exposition=this.p.exposition;
    this.recupPlante();
  }

  recupPlante(): void {
    this.http.get('http://localhost:8085/plante/'+this.idPlante).subscribe({
      next: (data) => {
        this.plante=data;
      },
      error: (err) => {console.log(err)}
    });
  }
}
