import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubscribeService } from '../services/subscribe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  msg: any;
  user: any;
  adresse: any;

  constructor(private http: HttpClient, private route: Router, private subscribeS: SubscribeService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  inscription(val: any): void {
    let adresseform = { ville: val.ville, cp: val.cp, rue: val.rue }
    this.http.post('http://localhost:8085/nv_adresse', adresseform).subscribe({
      next: (data) => {
        this.adresse = data;
        //console.log(this.adresse);
        console.log('adresse : ' + this.adresse);
        let userform = { nom: val.nom, prenom: val.prenom, login: val.login, mdp: val.mdp, adresse: this.adresse }
        this.http.post('http://localhost:8085/inscription', userform).subscribe({
          next: (data) => {
            this.user = data;
            this.subscribeS.user = this.user;
            this.auth.setUserInSession(this.user);
            this.route.navigateByUrl('quizz_score');
          },
          error: (err) => { console.log(err) }
        })

      },
      error: (err) => { console.log(err) }
    })

  }
}
