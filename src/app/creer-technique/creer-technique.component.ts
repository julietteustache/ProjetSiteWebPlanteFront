import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-creer-technique',
  templateUrl: './creer-technique.component.html',
  styleUrls: ['./creer-technique.component.css']
})
export class CreerTechniqueComponent implements OnInit {

  technique: any;

  user: any;
  idUser: any;
  score: any;
  statut: any;

  msg: any;

  constructor(private http: HttpClient, private route: Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.msg = "";

    this.user = this.uConnect.getUserConnect();
    this.idUser = this.user.idUser;
    this.score = this.user.score;
    this.statut = this.user.statut;
  }

  creerTechnique(val: any): void {
    if (this.statut === "Petit cactus") {
      this.msg = "Votre niveau n'est pas assez élevé";
    }
    else {
      this.http.post('http://localhost:8085/creertechnique', val).subscribe({
        next: (data) => {
          this.technique = data;
          this.route.navigateByUrl('techniques');
        },
        error: (err) => { console.log(err) }
      })
    }
  }

}
