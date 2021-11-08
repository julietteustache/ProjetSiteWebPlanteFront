import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Techniquespecial } from '../techniquespecial';

@Component({
  selector: 'app-techniques',
  templateUrl: './techniques.component.html',
  styleUrls: ['./techniques.component.css']
})
export class TechniquesComponent implements OnInit {
  idTechnique:any;
  techniques:any;

  user: any;
  idUser: any;
  score: any;
  statut: any;

  msg: any;

  constructor(private http:HttpClient, public latechnique:Techniquespecial, private route:Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.msg = "";

    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;
    this.statut = this.user.statut;

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

  goCreer(): void {
    console.log(this.statut)
    if (this.statut === "Petit cactus" || this.statut === "Primevère hivernale") {
      this.msg = "Votre niveau n'est pas assez élevé";
    }
    else {
      this.route.navigateByUrl('nouvelleTechnique');
    }

  }

}
