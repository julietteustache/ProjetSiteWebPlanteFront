import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EvenementSpec } from '../evenement-spec';
import { EvenementSpecifiqueComponent } from '../evenement-specifique/evenement-specifique.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NiveauComponent } from '../niveau/niveau.component';



@Component({
  selector: 'evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenement:any;
  response:any;
 
constructor(private http:HttpClient,private dialog: MatDialog,private route:Router, public servi: EvenementSpec, public connexion:AuthService) { }
score:any;
  ngOnInit(): void {
    this.recupEvent();
  }
  recupEvent():void{
    this.http.get('http://localhost:8085/event').subscribe({
      next:(data)=>{this.response=data;
        console.log(this.response)
      },
      error:(err)=>{console.log(err)}
    })
    }
  
  ouvreDetails(m:any){
    
    this.servi.evenement=m;
    console.log("Evenement : " + this.servi.evenement.idEvenement);
    const mydial=this.dialog.open(EvenementSpecifiqueComponent,{
      height:'auto',
      width: '800px',
    });
    };

  chercheVille(ville:any){
    
    this.http.get('http://localhost:8085/eventville/'+ville.ville).subscribe({
      next:(data1)=>{this.response=data1;
      },
      error:(err)=>{console.log(err)}
    })

  }

  verification(){
    console.log(this.connexion.getUserConnect().statut)
    if (this.connexion.isConnected()==true && this.connexion.getUserConnect().score>=1000){
      this.route.navigateByUrl('formulaireEvent')
    }
    else if (this.connexion.isConnected()==true && this.connexion.getUserConnect().score<1000){
      const mydial1=this.dialog.open(NiveauComponent)
    }
    else if (this.connexion.isConnected()==false && this.connexion.getUserConnect().score<1000){

    }
    else{}
  }
}
