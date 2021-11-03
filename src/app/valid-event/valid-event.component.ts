import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';
import { EvenementSpec } from '../evenement-spec';

@Component({
  selector: 'app-valid-event',
  templateUrl: './valid-event.component.html',
  styleUrls: ['./valid-event.component.css']
})
export class ValidEventComponent implements OnInit {
  m: Evenement=new Evenement(); 
  response:any;
  Nb:any;
  constructor(private http: HttpClient,private servi : EvenementSpec) { }

  ngOnInit(): void {
  }
  
  miseAjour() {
    this.m = this.servi.evenement
    this.Nb=this.m.NbParticipants-1;
    this.http.put('http://localhost:8085/event/'+this.Nb,this.m).subscribe({
      next:(data)=>{this.response=data;
      },
      error:(err)=>{console.log(err)}
    })
    };
}
