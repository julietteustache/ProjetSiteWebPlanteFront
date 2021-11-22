import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AfficherPlanteComponent } from '../afficher-plante/afficher-plante.component';
import { PlantesComponent } from '../plantes/plantes.component';

@Component({
  selector: 'app-navdoc',
  templateUrl: './navdoc.component.html',
  styleUrls: ['./navdoc.component.css']
})
export class NavdocComponent implements OnInit {
  selectedFile:any;
  mediaUrl:any;

  categorie:any;


  constructor(private http:HttpClient, private route:Router, private complante:PlantesComponent ) { } //On importe le component Plantes pour pouvoir utiliser ses variables et fonctions

  ngOnInit(): void {
  }

  isPagePlante():boolean {
    if (this.route.url === '/liste_plantes') {
      return true;
    }
    else {
      return false;
    }

  }
  

  
  afficherTout():void {
    if (this.route.url === '/liste_plantes') {
      this.complante.ngOnInit();
    }
  }
  

  afficherArbres(): void {
    this.categorie="arbre";
    this.http.get("http://localhost:8085/plante/categorie/"+this.categorie).subscribe({
      next: (data) => {
        this.complante.plantes=data;
      },
      error: (err) => {console.log(err)}
    });

  }

  afficherPlantes(): void {
    this.categorie="plante";
    this.http.get("http://localhost:8085/plante/categorie/"+this.categorie).subscribe({
      next: (data) => {
        this.complante.plantes=data;
      },
      error: (err) => {console.log(err)}
    });

  }

  afficherLegumes(): void {
    this.categorie="legume";
    this.http.get("http://localhost:8085/plante/categorie/"+this.categorie).subscribe({
      next: (data) => {
        this.complante.plantes=data; //la liste plantes de PlantesComponent s'actualise avec uniquement la catégorie de plantes sélectionnée
      },
      error: (err) => {console.log(err)}
    });
  }

}
