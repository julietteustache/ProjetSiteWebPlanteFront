import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plantespecial } from '../plantespecial';
import { Plante } from '../plante';
import { Router } from '@angular/router';

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

  constructor( private http:HttpClient, public laplante : Plantespecial, private route:Router) { }

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
  }

  modifPlante(val:any): void{
    console.log(val);
    this.http.put('http://localhost:8085/modifplante/'+this.idPlante,val).subscribe({
      next:(data)=>{
        this.plante=data;
        this.laplante.plante=this.p; //A corriger, pour l'instant ça ne fait qu'afficher l'ancienne version non actualisée
        this.route.navigateByUrl('afficher_plante');
    },
      error:(err)=>{console.log(err)}
    })
    
    
  }


}
