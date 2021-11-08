import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from '../annonce';
import { Evenement } from '../evenement';
import { Plante } from '../plante';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  eventMax: any;
  annonceMax: any;
  plantemax: any;
  evenement: any;
  annonce: any;
  plante: any;
  idmax: any;
  idmaxA: any;
  idmaxP: any;
  liste: Array<Evenement> = new Array<Evenement>();
  listeA: Array<Annonce> = new Array<Annonce>();
  listeP: Array<Plante> = new Array<Plante>();
  e: any;


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    //Rechercher les 3 derniers evenements
    this.http.get('http://localhost:8085/recherche').subscribe({
      next: (data) => {
        this.eventMax = data;
        this.idmax = this.eventMax.idEvenement;


      },
      error: (err) => { console.log(err) }
    })
    this.http.get('http://localhost:8085/event').subscribe({
      next: (data) => {
        this.evenement = data;

        this.evenement.forEach((element: Evenement) => {
          this.e = element;
          if (element.idEvenement >= this.idmax - 2) {

            this.liste.push(element);


          }

        });

      },
      error: (err) => { console.log(err) }
    })
    console.log(this.liste)
    //Rechercher les 3 dernières annonces
    this.http.get('http://localhost:8085/rechercheA').subscribe({
      next: (data) => {
        this.annonceMax = data;
        this.idmaxA = this.annonceMax.idAnnonce;
      },
      error: (err) => { console.log(err) }
    })
    this.http.get('http://localhost:8085/annonce').subscribe({
      next: (data) => {
        this.annonce = data;

        this.annonce.forEach((element1: Annonce) => {
          this.e = element1;
          if (element1.idAnnonce >= this.idmaxA - 2) {

            this.listeA.push(element1);
          }

        });

      },
      error: (err) => { console.log(err) }
    })
    //Recherche 3 articles de plantes
    this.http.get('http://localhost:8085/rechercheP').subscribe({
      next: (data) => {
        this.plantemax = data;
        this.idmaxP = this.plantemax.idPlante;
      },
      error: (err) => { console.log(err) }
    })
    this.http.get('http://localhost:8085/plante').subscribe({
      next: (data) => {
        this.plante = data;

        this.plante.forEach((element2: Plante) => {
          this.e = element2;
          if (element2.idPlante >= this.idmaxP - 2) {

            this.listeP.push(element2);
          }

        });

      },
      error: (err) => { console.log(err) }
    })
  };


  goEvent() {
    this.route.navigateByUrl('evenement')
  }
}
