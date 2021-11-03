import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EvenementSpec } from '../evenement-spec';
import { Evenement } from '../evenement';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ValidEventComponent } from '../valid-event/valid-event.component';
import { MatDialog } from '@angular/material/dialog';

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
m: Evenement=new Evenement(); 
  constructor( private http: HttpClient,private servi : EvenementSpec,private dialog:MatDialog) { }

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
  const mydial = this.dialog.open(ValidEventComponent);
  mydial.afterClosed().subscribe(result => {
    this.ngOnInit();
  })
  };
}
