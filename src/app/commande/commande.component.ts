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




@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

createur:any;
a: any; 
data:any;
score:any;
stock:any;

  constructor(private http: HttpClient,private servi : Annoncespeciale,private dialog:MatDialog,private uConnect:UserConnect,public dialogref:MatDialogRef<CommandeComponent>,
    public dialogref1:MatDialogRef<AnnonceComponent>, private route :Router) { }

  ngOnInit(): void {
    
  }

  /*validation() {
    const mydial = this.dialog.open(ValidCommandeComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
    };*/

    miseAjour() {
      this.createur=this.uConnect.user;
      this.a = this.servi.annonce
      this.stock=this.a.stock-1;
      this.score=this.a.createur.score-this.a.plante.prix;
      console.log(this.stock);
      this.http.put('http://localhost:8085/annonce/'+this.stock,this.a).subscribe({
        next:(data)=>{this.a=data;
          this.dialogref.close();
          this.dialogref1.close();
        },
        error:(err)=>{console.log(err)}
      })
      this.http.put('http://localhost:8085/score/'+this.score,this.createur).subscribe({
        next:(data)=>{this.createur=data;
        },
        error:(err)=>{console.log(err)}
      })
      this.route.navigateByUrl('annonce');


      };

}
