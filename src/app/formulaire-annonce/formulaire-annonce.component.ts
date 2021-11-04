import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormannService } from '../services/formann.service';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {
  annonce : any;
  createur : any;
  
  constructor(private http:HttpClient,private route:Router, private form : FormannService,private uConnect:SubscribeService) { }

  ngOnInit(): void {
   
  }
  formulaireAnnonce(val:any):void{
    let annonce = {annonce: val.annonce, auteur:this.createur}
    this.http.post('http://localhost:8085/new_annonce',val).subscribe({
      next:(data)=>{
        this.annonce=data;
        
        this.form.annonce = this.annonce;
        this.route.navigateByUrl('annonce');
      },
  
      error:(err)=>{console.log(err)}
    })
  }
 

}
