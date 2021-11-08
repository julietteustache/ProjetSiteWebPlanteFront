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



  constructor(private http:HttpClient,private route:Router,public uConnect:AuthService) { }


  ngOnInit(): void {
  }
  formulaireE(val:any):void{
    
    this.http.post('http://localhost:8085/insertEvent/'+this.uConnect.getUserConnect(),val).subscribe({
      next:(data)=>{this.evenement=data
        this.route.navigateByUrl('Evenement');
      },
  
      error:(err)=>{console.log(err)}
    })
  }
}
