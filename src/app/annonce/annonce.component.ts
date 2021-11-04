import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import { MatDialog } from '@angular/material/dialog';
import { Annoncespeciale } from '../annoncespeciale';
import { CommandeComponent } from '../commande/commande.component';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  annonce : any;
  dropdownCategorie : any;
  selectedCategorie : any;
  dropdownSousCategorie : any;
  selectedSousCategorie : any;
  dropdownEspece : any;
  selectedEspece : any;
  dropdownType : any;
  selectedType : any;
  dropdownSettings : IDropdownSettings={};
  constructor(private http:HttpClient, private router : Router,private dialog: MatDialog, public servi: Annoncespeciale) { }

  ngOnInit()  {
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

  recupAnnonce() :void{
    this.http.get('http://localhost:8085/annonce').subscribe({
      next:(data)=>{
        this.annonce=data;
      },
      error : (err)=>{console.log(err)}
    })
  }

  ouvreCommande(a : any){
    
    this.servi.annonce=a;
   
    const mydial=this.dialog.open(CommandeComponent);
    console.log(a);

    };

  /*recupAnnonceByCategorie(item : any) {
    this.http.get('http://localhost:8085/annonce/{item}').subscribe({
      next:(data)=>{
        this.annonce=data;
      },
      error : (err)=>{console.log(err)}
    })
  }*/



}
