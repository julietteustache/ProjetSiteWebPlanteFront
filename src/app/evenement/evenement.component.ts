import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
evenement:any;
constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.recupEvent();
  }
  recupEvent():void{
    this.http.get('http://localhost:8085/event').subscribe({
      next:(data)=>{this.evenement=data;
      },
      error:(err)=>{console.log(err)}
    })
    }
    redirection():void{
      this.route.navigateByUrl('formulaireEvent');
    }
}
