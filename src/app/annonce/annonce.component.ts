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

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  
 annonce:any;
  a: Annonce = new Annonce;
  idAnnonce: any;
  description: any;
  type: any;
  stock: any;
  createur: any;
  plante: any;
  annonce2: any;

  dropdownSettings: IDropdownSettings = {};
  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog, public servi: Annoncespeciale) { }

  ngOnInit() {
    this.recupAnnonce();
    this.a = this.servi.annonce;
    console.log('Terrain : ' + this.a.idAnnonce);

    this.idAnnonce = this.a.idAnnonce;
    this.description = this.a.description;
    this.type = this.a.type;
    this.createur = this.a.createur;
    this.plante = this.a.plante;
    this.stock = this.a.stock;
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
        this.annonce2 = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  ouvrirCommande(an : any) {
    this.servi.annonce=an;
    const mydial = this.dialog.open(CommandeComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();

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



}
