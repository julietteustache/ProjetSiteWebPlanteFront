import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plante } from '../plante';
import { AfficherPlanteComponent } from '../afficher-plante/afficher-plante.component';
import { Plantespecial } from '../plantespecial';


@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrls: ['./plantes.component.css']
})
export class PlantesComponent implements OnInit {
  plantes:any;
  idPlante:any;

  constructor(private http:HttpClient, public laplante:Plantespecial) { }

  ngOnInit(): void {
    this.getPlantes()
  }

  getPlantes(): void {
    this.http.get("http://localhost:8085/plante").subscribe({
      next: (data) => {
        this.plantes=data;
      },
      error: (err) => {console.log(err)}
    });
  }

  stock(p:any): void {
    this.laplante.plante=p;
  }

}

