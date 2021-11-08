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
idUser:any;
heure:any;
date:any;
constructor( private http: HttpClient,private servi : EvenementSpec,private dialog:MatDialog, private connexion:AuthService, private route:Router,private dialogref:MatDialogRef<EvenementSpecifiqueComponent>) { }

  ngOnInit(): void {
    
    this.m = this.servi.evenement;
    this.Nb=this.m.nbParticipants;
    console.log('Terrain : ' +  this.m.idEvenement);
    this.u=this.connexion.getUserConnect();
    this.idUser = this.u.idUser;
    this.score=this.u.score;
    this.titre = this.m.titre;
    this.heure=this.m.heure;
    this.date=this.m.date;
    this.description = this.m.description;
    this.participants = this.m.nbParticipants;
    console.log(this.score);
    this.organisateur = this.m.organisateur;
    this.adresse = this.m.adresse;

  }


validation() {
  if (this.connexion.isConnected()==true){
    
    
    this.Nb=this.Nb-1;
    this.score=this.score+100;
    this.u.score=this.score;
    this.m.nbParticipants=this.Nb;
    console.log(this.idUser);
    localStorage.setItem('userConnect', JSON.stringify(this.u));
    this.http.put('http://localhost:8085/event/'+this.m.idEvenement,this.m).subscribe({
      next:(data)=>{this.m=data;
        
      },
      error:(err)=>{console.log(err)}
    })
    this.http.put('http://localhost:8085/modifuser/'+this.idUser,this.u).subscribe({
      
      next:(data)=>{this.u=data;
      },
      error:(err)=>{console.log(err)}
    })
  this.dialogref.close()
  this.connexion.gestionScore(this.u) 
  }

  else{
  
  }
  
  };

  fermeture(){
    this.dialogref.close()
  }
}
