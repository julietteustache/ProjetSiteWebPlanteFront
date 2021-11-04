import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EvenementSpec } from '../evenement-spec';
import { Evenement } from '../evenement';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ValidEventComponent } from '../valid-event/valid-event.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-evenement-specifique',
  templateUrl: './evenement-specifique.component.html',
  styleUrls: ['./evenement-specifique.component.css']
})
export class EvenementSpecifiqueComponent implements OnInit {
titre:any;
description:any;
participants:any;
organisateur:any;
adresse:any;
m: any; 
u:any;
Nb:any;
score:any;
constructor( private http: HttpClient,private servi : EvenementSpec,private dialog:MatDialog, private connexion:AuthService, private route:Router,private dialogref:MatDialogRef<EvenementSpecifiqueComponent>) { }

  ngOnInit(): void {
    this.m = this.servi.evenement
    console.log('Terrain : ' +  this.m.idEvenement);

    this.titre = this.m.titre;
    this.description = this.m.description;
    this.participants = this.m.NbParticipants;
    this.organisateur = this.m.organisateur;
    this.adresse = this.m.adresse;

  }


validation() {
  if (this.connexion.isConnected()==true){
    this.u=this.connexion.getUserConnect;
    this.m = this.servi.evenement
    this.Nb=this.m.NbParticipants-1;
    this.score=this.u.score+100;
    console.log(this.score);
    this.http.put('http://localhost:8085/event/'+this.Nb,this.m).subscribe({
      next:(data)=>{this.m=data;
        
      },
      error:(err)=>{console.log(err)}
    })
    this.http.put('http://localhost:8085/score/'+this.score,this.u).subscribe({
      
      next:(data)=>{this.u=data;
      },
      error:(err)=>{console.log(err)}
    })
  this.dialogref.close()
    
  }

  else{
  
  }
  };

  fermeture(){
    this.dialogref.close()
  }
}
