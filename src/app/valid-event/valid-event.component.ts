import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from '../evenement';
import { EvenementSpec } from '../evenement-spec';
import { MatDialogRef } from '@angular/material/dialog';
import { EvenementSpecifiqueComponent } from '../evenement-specifique/evenement-specifique.component';

@Component({
  selector: 'app-valid-event',
  templateUrl: './valid-event.component.html',
  styleUrls: ['./valid-event.component.css']
})
export class ValidEventComponent implements OnInit {
  m: any; 
  data:any;
  Nb:any;
  constructor(private http: HttpClient,private servi : EvenementSpec,private route:Router,public dialogref:MatDialogRef<ValidEventComponent>,public dialogref1:MatDialogRef<EvenementSpecifiqueComponent>) { }

  ngOnInit(): void {
  }
  
  miseAjour() {
    this.m = this.servi.evenement
    this.Nb=this.m.nbParticipants-1;
    console.log(this.Nb);
    this.http.put('http://localhost:8085/event/'+this.Nb,this.m).subscribe({
      next:(data)=>{this.m=data;
        this.dialogref.close();
        this.dialogref1.close();
      },
      error:(err)=>{console.log(err)}
    })
    };
}
