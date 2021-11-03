import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EvenementSpec } from '../evenement-spec';
import { EvenementSpecifiqueComponent } from '../evenement-specifique/evenement-specifique.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenement:any;
  response:any;
 
constructor(private http:HttpClient,private dialog: MatDialog, public servi: EvenementSpec) { }

  ngOnInit(): void {
    this.recupEvent();
  }
  recupEvent():void{
    this.http.get('http://localhost:8085/event').subscribe({
      next:(data)=>{this.response=data;
      },
      error:(err)=>{console.log(err)}
    })
    }
  
  ouvreDetails(m:any){
    
    this.servi.evenement=m;
    console.log("Evenement : " + this.servi.evenement.idEvenement);
    const mydial=this.dialog.open(EvenementSpecifiqueComponent);

    };

  chercheVille(ville:any){
    
    this.http.get('http://localhost:8085/eventville/'+ville.ville).subscribe({
      next:(data1)=>{this.response=data1;
      },
      error:(err)=>{console.log(err)}
    })

  }
}
