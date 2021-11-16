import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-creer-plante',
  templateUrl: './creer-plante.component.html',
  styleUrls: ['./creer-plante.component.css']
})
export class CreerPlanteComponent implements OnInit {
  msg: any;
  plante: any;

  user: any;
  idUser: any;
  score: any;
  statut: any;

  constructor(private http: HttpClient, private route: Router, private uConnect: AuthService) { }

  ngOnInit(): void {
    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;

  }

  creerPlante(val: any): void {
    if (this.statut === "Petit cactus" || this.statut === "Tulipe printanière") {
      this.msg = "Votre niveau n'est pas assez élevé";
    }
    else {
      this.http.post('http://localhost:8085/creerplante', val).subscribe({
        next: (data) => {
          this.plante = data;
          this.route.navigateByUrl('liste_plantes');
          this.score = this.score + 100;

          this.user.score = this.score;
          localStorage.setItem('userConnect', JSON.stringify(this.user));
          this.http.put('http://localhost:8085/modifuser/' + this.idUser, this.user).subscribe({
            next: (data) => {
              this.user = data;
              this.uConnect.gestionScore(this.user)
            },
            error: (err) => { console.log(err) }
          })
        },
        error: (err) => { console.log(err) }
      })
    }
  }

}
