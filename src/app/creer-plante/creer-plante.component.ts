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
  }

  creerPlante(val: any): void {
    if (this.statut === "Petit cactus" || this.statut === "Primevère hivernale") {
      this.msg = "Votre niveau n'est pas assez élevé";
    }
    else {
      this.http.post('http://localhost:8085/creerplante', val).subscribe({
        next: (data) => {
          this.plante = data;
          this.route.navigateByUrl('liste_plantes');
        },
        error: (err) => { console.log(err) }
      })
    }
  }

}
