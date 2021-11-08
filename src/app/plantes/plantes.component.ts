import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plante } from '../plante';
import { AfficherPlanteComponent } from '../afficher-plante/afficher-plante.component';
import { Plantespecial } from '../plantespecial';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-plantes',
  templateUrl: './plantes.component.html',
  styleUrls: ['./plantes.component.css']
})
export class PlantesComponent implements OnInit {
  plantes: any;
  idPlante: any;

  user: any;
  idUser: any;
  score: any;
  statut: any;

  msg: any;

  constructor(private http: HttpClient, public laplante: Plantespecial, private route: Router, private uConnect: AuthService) { }

  ngOnInit(): void {
    this.msg = "";

    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;
    this.statut = this.user.statut;

    this.getPlantes()
  }

  getPlantes(): void {
    this.http.get("http://localhost:8085/plante").subscribe({
      next: (data) => {
        this.plantes = data;
      },
      error: (err) => { console.log(err) }
    });
  }

  stock(p: any): void {
    this.laplante.setPlante(p);
  }

  goCreer(): void {
    console.log(this.statut)
    if (this.statut === "Petit cactus" || this.statut === "Tulipe printanière") {
      this.msg = "Votre niveau n'est pas assez élevé";
    }
    else {
      this.route.navigateByUrl('nouvellePlante');
    }

  }

}

