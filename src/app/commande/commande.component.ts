import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Annoncespeciale } from '../annoncespeciale';
import { Annonce } from '../annonce';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ValidCommandeComponent } from '../valid-commande/valid-commande.component';
import { MatDialog } from '@angular/material/dialog';
import { UserConnect } from '../user-connect';
import { MatDialogRef } from '@angular/material/dialog';
import { AnnonceComponent } from '../annonce/annonce.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {


  idAnnonce: any;
  description: any;
  type: any;
  quantite: any;
  createur: any;
  plante: any;
  an: any;
  a: any;
  data: any;
  data1:any;
  newScore: any;
  //idUser: any;
  user : any;
  msg:any;
  constructor(private http: HttpClient, private servi: Annoncespeciale, private dialog: MatDialog, public dialogref: MatDialogRef<CommandeComponent>,
    public dialogref1: MatDialogRef<AnnonceComponent>, private route: Router, private uConnect: AuthService) { }

  ngOnInit(): void {

   // console.log(this.servi.annonce);
   
    this.user = this.uConnect.getUserConnect();
    //console.log('score ', this.user.score);
    this.an = this.servi.annonce;
    //this.idUser = this.user.idUser;
    //this.score = this.user.score;


    this.idAnnonce = this.an.idAnnonce;
    this.description = this.an.description;
    this.type = this.an.type;
    this.createur = this.an.createur;
    this.plante = this.an.plante;
    this.quantite = this.an.stock;

  }

  /*validation() {
    const mydial = this.dialog.open(ValidCommandeComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
    };*/

  miseAjour(val: any) {

    
    if(this.user.score>this.an.plante.prix)
    {
      console.log('prixV1', this.an.plante.prix)
        console.log('scoreV1', this.user.score)
        console.log('quantite', this.quantite)
        
      if (this.quantite >= 1 ) {
        console.log('prixV1', this.an.plante.prix)
        console.log('scoreV1', this.user.score)
        console.log('stock', val.stock)
        this.quantite = this.quantite - val.stock;
        console.log('an ', this.an);
        console.log('stock ', this.quantite);
        this.http.put('http://localhost:8085/annonce/' + this.quantite, this.an).subscribe({
          next: (data) => {
            this.a = data;
            this.dialogref.close();
            this.dialogref1.close();
            // window.location.reload();
            this.ngOnInit();
  
          },
          
          error: (err) => { console.log(err) }
        });
        if(this.quantite<1){
          this.http.delete('http://localhost:8085/annonce/' + this.idAnnonce).subscribe({
          next: (data) => {
            this.a = data;
            this.dialogref.close();
            this.dialogref1.close();
            //window.location.reload();
          },
          error: (err) => { console.log(err) }
        })
            
        }
        console.log(this.quantite);

        this.newScore = this.user.score - (this.an.plante.prix)*(this.quantite-1);
        this.user.score = this.newScore;
        console.log('score ', this.newScore);
        localStorage.setItem('userConnect' , JSON.stringify(this.user));
        this.http.put('http://localhost:8085/modifuser/' + this.user.idUser, this.user).subscribe({
          next: (data1) => {
            console.log(data1)
            this.user=data1;
            this.ngOnInit();
          },
          error: (err) => { console.log(err) }
        })
      }
      /*else if(this.quantite<=1) {
        
      }*/

    }
    else{
      this.msg="Vous n'avez pas assez de points!"
    }

  };




}
