import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from '../evenement';
import { EvenementSpec } from '../evenement-spec';
import { MatDialogRef } from '@angular/material/dialog';
import { EvenementSpecifiqueComponent } from '../evenement-specifique/evenement-specifique.component';
import { UserConnect } from '../user-connect';
import { Annoncespeciale } from '../annoncespeciale';
import { CommandeComponent } from '../commande/commande.component';

@Component({
  selector: 'app-valid-commande',
  templateUrl: './valid-commande.component.html',
  styleUrls: ['./valid-commande.component.css']
})
export class ValidCommandeComponent implements OnInit {
  a: any; 
  data:any;
  stock : any
  u:any;
  score:any;

  constructor(private http: HttpClient,
    private servi : Annoncespeciale,
    private uConnect:UserConnect,
    private route:Router,
    public dialogref:MatDialogRef<ValidCommandeComponent>,
    public dialogref1:MatDialogRef<CommandeComponent>) { }

  ngOnInit(): void {
  }

  miseAjour() {
    this.u=this.uConnect.user;
    this.a = this.servi.annonce
    this.stock=this.a.stock-1;
    this.score=this.a.score-this.a.plante.prix;
    console.log(this.stock);
    this.http.put('http://localhost:8085/annonce/'+this.stock,this.a).subscribe({
      next:(data)=>{this.a=data;
        this.dialogref.close();
        this.dialogref1.close();
      },
      error:(err)=>{console.log(err)}
    })
    this.http.put('http://localhost:8085/score/'+this.score,this.u).subscribe({
      next:(data)=>{this.u=data;
      },
      error:(err)=>{console.log(err)}
    })
    };

}


