import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
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
  constructor(private http:HttpClient, private router : Router) { }

  ngOnInit()  {
    this.recupAnnonce();
    this.dropdownCategorie = [
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

    
    this.dropdownSousCategorie = [
      { item_id: 1, item_text: 'Techniques générales' },
      { item_id: 2, item_text: 'Abres' },
      { item_id: 3, item_text: 'Fleurs' },
      { item_id: 4, item_text: 'Fuits et légumes' },
     
    ];


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
   
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  recupAnnonce() :void{
    this.http.get('http://localhost:8085/annonce').subscribe({
      next:(data)=>{
        this.annonce=data;
      },
      error : (err)=>{console.log(err)}
    })
  }

}
