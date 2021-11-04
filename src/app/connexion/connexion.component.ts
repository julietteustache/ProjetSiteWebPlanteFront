import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubscribeService } from '../services/subscribe.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  msg: any;
  user: any;

  constructor(private http: HttpClient, private route: Router, private subscribeS: SubscribeService, public auth: AuthService) { }


  ngOnInit(): void {
    this.auth.redirectToHomeIfConnect();
  }

  connexion(val: any): void {
    // console.log('user qui est entr de s conn', val);
    this.http.post('http://localhost:8085/connexion ', val).subscribe({
      next: (data) => {
        this.user = data
        if (this.user != null) { this.auth.setUserInSession(this.user);  this.route.navigateByUrl('accueil'); }
        else { this.auth.msgErr = 'identifiant ou mot de passe incorrecte'; }
      },
      error: (err) => { console.log(err) }
    })
  }

}
