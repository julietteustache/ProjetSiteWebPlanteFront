import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-afficher-plante',
  templateUrl: './afficher-plante.component.html',
  styleUrls: ['./afficher-plante.component.css']
})
export class AfficherPlanteComponent implements OnInit {
  plante:any;
  idPlante:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  recupPlante(): void {
    this.http.get('http://localhost:8085/plante/'+this.idPlante).subscribe({
      next: (data) => {
        this.plante=data;
      },
      error: (err) => {console.log(err)}
    });


  }
}
