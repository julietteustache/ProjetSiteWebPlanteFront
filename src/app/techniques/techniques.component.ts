import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Techniquespecial } from '../techniquespecial';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.css']
})
export class TechniquesComponent implements OnInit {
  idTechnique:any;
  techniques:any;

  constructor(private http:HttpClient, public latechnique:Techniquespecial) { }

  ngOnInit(): void {
    this.getTechniques();
  }

  getTechniques(): void {
    this.http.get("http://localhost:8085/techniques").subscribe({
      next: (data) => {
        this.techniques=data;
      },
      error: (err) => {console.log(err)}
    });
  }

  stock(t:any): void {
    this.latechnique.setTechnique(t);
  }

}
