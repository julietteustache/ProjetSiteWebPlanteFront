import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormannService } from '../services/formann.service';
import { SubscribeService } from '../services/subscribe.service';
import { AuthService } from '../services/auth.service';
import { Annonce } from '../annonce';
import { Plante } from '../plante';
import { IDropdownSettings } from 'ng-multiselect-dropdown';



@Component({
  selector: 'app-formulaire-annonce',
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {
  annonce: any;
  createur: any;
  plante: any;
  espece: any;

  idCreateur: any;
  score: any;

  stock: any;
  type: any;
  description: any;
  p: any;
  liste: any;
  an:any;
  data2:any;

  dropdownSettings: any;
  dropdownPlante: any;
  selectedPlante: any;





  constructor(private http: HttpClient, private route: Router, private form: FormannService, private uConnect: AuthService) { }

  ngOnInit(): void {

    this.createur = this.uConnect.getUserConnect();
    this.recupPlante();
    this.recupType();


    // this.p=this.recupPlante();


    //this.espece=this.plante.espece;


  }

  /* recupPlante(plante:any){
     this.http.get('http://localhost:8085/trouverPlante/'+plante.plante).subscribe({
       next:(data1)=>{
         this.p=data1
       },
       error:(err)=>{console.log(err)}
     })
   }*/
  recupPlante() {
    this.http.get('http://localhost:8085/plante/').subscribe({
      next: (data1) => {
        this.plante = data1;
      },
      error: (err) => { console.log(err) }

    })

  }

  recupType(){
    this.http.get('http://localhost:8085/annonce/').subscribe({
      next: (data2) => {
        this.an = data2;
      },
      error: (err) => { console.log(err) }

    })

  }

  formulaire(val:any): void{
    let annonce = {description: val.description, stock:val.stock, type:val.type, user:this.createur, plante :val.plante}
    console.log(val.plante),
    console.log(annonce),
    this.http.post('http://localhost:8085/newAnnonce/' ,annonce).subscribe({

      next :(data2)=>{
        this.an=data2;
        console.log("test");
        
        console.log(this.p);
        console.log(this.createur);
        console.log(this.an);
        this.route.navigateByUrl('annonce');
      }
    })
  }

 /* formulaireAnnonce(val: any): void {

   // let an = {an: val.an, plante :this.p}
    this.http.post('http://localhost:8085/newAnnonce/' +this.createur, + this.p, val).subscribe({
      
    let annonce = {description: val.description, stock:val.stock, type:val.type, user:this.createur, plante :val.plante}
    
    //this.http.post('http://localhost:8085/new_annonce', annonce).subscribe({

      next: (data) => {
        console.log("test");
        this.an = data;
        console.log(this.p);
        console.log(this.createur);
        console.log(this.an);

        //this.route.navigateByUrl('annonce');
      },

      error: (err) => { console.log(err) }
    })
  }*/




}
