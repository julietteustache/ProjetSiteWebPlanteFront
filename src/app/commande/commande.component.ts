import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Annoncespeciale } from '../annoncespeciale';
import { Annonce } from '../annonce';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ValidCommandeComponent } from '../valid-commande/valid-commande.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  idAnnonce:any;
description:any;
type:any;
stock:any;
createur:any;
plante : any;
a: Annonce=new Annonce(); 

  constructor(private http: HttpClient,private servi : Annoncespeciale,private dialog:MatDialog) { }

  ngOnInit(): void {
    
    this.a = this.servi.annonce
    

    this.idAnnonce = this.a.idAnnonce;
    this.description = this.a.description;
    this.type = this.a.type;
    this.stock = this.a.stock;
    this.createur = this.a.createur;
    this.plante=this.a.plante;
    
  }

  validation() {
    const mydial = this.dialog.open(ValidCommandeComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
    };

}
