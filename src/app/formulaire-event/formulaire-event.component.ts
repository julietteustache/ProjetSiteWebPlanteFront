import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-formulaire-event',
  templateUrl: './formulaire-event.component.html',
  styleUrls: ['./formulaire-event.component.css']
})
export class FormulaireEventComponent implements OnInit {
evenement:any;
evenementd:any;


  constructor(private http:HttpClient,private route:Router,public uConnect:AuthService) { }


  ngOnInit(): void {
  }
  formulaireE(val:any):void{
    let evenementd = {titre:val.titre, description:val.description, NbParticipants:val.NbParticipants, date:val.date, heure:val.heure,user:this.uConnect.getUserConnect(), plante :this.uConnect.getUserConnect().adresse}
    this.http.post('http://localhost:8085/insertEvent',evenementd).subscribe({
      next:(data)=>{this.evenement=data
        this.route.navigateByUrl('evenement');
      },
  
      error:(err)=>{console.log(err)}
    })
  }
}
