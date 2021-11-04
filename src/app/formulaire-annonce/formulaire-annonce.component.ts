import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {
  annonce : any;
  constructor(private http:HttpClient,private route:Router ) { }

  ngOnInit(): void {
  }
  formulaireAnnonce(val:any):void{
    
    this.http.post('http://localhost:8085/new_annonce',val).subscribe({
      next:(data)=>{this.annonce=data
        this.route.navigateByUrl('annonce');
      },
  
      error:(err)=>{console.log(err)}
    })
  }

}
