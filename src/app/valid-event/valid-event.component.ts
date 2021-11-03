import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from '../evenement';
import { EvenementSpec } from '../evenement-spec';
import { MatDialogRef } from '@angular/material/dialog';
import { EvenementSpecifiqueComponent } from '../evenement-specifique/evenement-specifique.component';
import { UserConnect } from '../user-connect';

@Component({
  selector: 'app-valid-event',
  templateUrl: './valid-event.component.html',
  styleUrls: ['./valid-event.component.css']
})
export class ValidEventComponent implements OnInit {
  m: any; 
  data:any;
  Nb:any;
  u:any;
  score:any;
  constructor(private http: HttpClient,
    private servi : EvenementSpec,
    private uConnect:UserConnect,
    private route:Router,
    public dialogref:MatDialogRef<ValidEventComponent>,
    public dialogref1:MatDialogRef<EvenementSpecifiqueComponent>) { }

  ngOnInit(): void {
  }
  
  miseAjour() {
    this.u=this.uConnect.user;
    this.m = this.servi.evenement
    this.Nb=this.m.nbParticipants-1;
    this.score=this.m.score+100;
    console.log(this.Nb);
    this.http.put('http://localhost:8085/event/'+this.Nb,this.m).subscribe({
      next:(data)=>{this.m=data;
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
