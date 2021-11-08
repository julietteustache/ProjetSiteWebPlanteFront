import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import { MatDialog } from '@angular/material/dialog';
import { Annoncespeciale } from '../annoncespeciale';
import { CommandeComponent } from '../commande/commande.component';
import { Annonce } from '../annonce';
import { AuthService } from '../services/auth.service';
import { NiveauComponent } from '../niveau/niveau.component';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  
  annonce:any;
  response:any;
  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, public servi: Annoncespeciale,public connexion:AuthService) { }

  ngOnInit() {
    this.recupAnnonce();
    
    /*this.dropdownCategorie = [
      { item_id: 1, item_text: 'Techniques générales' },
      { item_id: 2, item_text: 'Abres' },
      { item_id: 3, item_text: 'Fleurs' },
      { item_id: 4, item_text: 'Fuits et légumes' },
     
    ];
    this.selectedCategorie = [
      { item_id: 1, item_text: 'Techniques générales' },
      { item_id: 2, item_text: 'Abres' },
      { item_id: 3, item_text: 'Fleurs' },
      { item_id: 4, item_text: 'Fuits et légumes' },
    ];

    if(this.selectedCategorie.item_id==1) // Si on selectionne techniques générales
    {
      this.dropdownSousCategorie = [
        { item_id: 1, item_text: 'Greffe' },
        { item_id: 2, item_text: 'Bouture' },
        
      ];

      this.selectedSousCategorie=[
        
          { item_id: 1, item_text: 'Greffe' },
          { item_id: 2, item_text: 'Bouture' },
        
      ];
      if(this.selectedSousCategorie.item_id==1) // si on selection greffe
      {
        this.dropdownEspece=[
          { item_id: 1, item_text: 'Pommier' },
          { item_id: 2, item_text: 'Poirier' },
          { item_id: 3, item_text: 'Oranger' },
        ]
      }
      if(this.selectedSousCategorie.item_id==2) // si on selection bouture
      {
        this.dropdownEspece=[
          { item_id: 1, item_text: 'Rose' },
          { item_id: 2, item_text: 'Tulipe' },
          { item_id: 3, item_text: 'Bonsai' },
        ]
      }
    }

    if(this.selectedCategorie.item_id==2) // si on selectionne arbres
    {

    }
    
     
   


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };*/

  }
  /* onCategorieSelect(item: any) {
     if(item.item_id==1)
     {
       this.recupAnnonceByCategorie('technique');
     }
     if(item.item_id==2)
     {
       this.recupAnnonceByCategorie('arbres');
     }
     if(item.item_id==3)
     {
       this.recupAnnonceByCategorie('fleur');
     }
     if(item.item_id==4)
     {
       this.recupAnnonceByCategorie('légume');
     }
     
   }
 
   onSousCategorieSelect(item: any) {
     if(item.item_id==1)
     {
       this.recupAnnonceByCategorie('technique');
     }
     if(item.item_id==2)
     {
       this.recupAnnonceByCategorie('arbres');
     }
     if(item.item_id==3)
     {
       this.recupAnnonceByCategorie('fleur');
     }
     if(item.item_id==4)
     {
       this.recupAnnonceByCategorie('légume');
     }
     
   }
   onSelectAll() {
    
   }
 
   onDeSelect(items : any)
   {
 
   }
 
   onDeSelectAll()
   {
 
   }*/

  recupAnnonce(): void {
    this.http.get('http://localhost:8085/annonce').subscribe({
      next: (data) => {
        this.response = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  ouvrirCommande(an : any) {
    this.servi.annonce=an;
    const mydial=this.dialog.open(CommandeComponent,{
      height:'auto',
      width: '800px',
    });
   
 }
 

  /*recupAnnonceByCategorie(item : any) {
    this.http.get('http://localhost:8085/annonce/{item}').subscribe({
      next:(data)=>{
        this.annonce=data;
      },
      error : (err)=>{console.log(err)}
    })
  }*/

  verification(){
    if (this.connexion.isConnected()==true && this.connexion.getUserConnect().score>=1000){
      this.router.navigateByUrl('formulaireAnnonce')
    }
    else if (this.connexion.isConnected()==true && this.connexion.getUserConnect().score<1000){
      const mydial1=this.dialog.open(NiveauComponent)
    }
    else if (this.connexion.isConnected()==false && this.connexion.getUserConnect().score<1000){

    }
    else{}
  }
  rechercheEspece(espece:any){
    
    this.http.get('http://localhost:8085/annonce_espece/'+espece.espece).subscribe({
      next:(data1)=>{this.response=data1;
      },
      error:(err)=>{console.log(err)}
    })

  }



}
