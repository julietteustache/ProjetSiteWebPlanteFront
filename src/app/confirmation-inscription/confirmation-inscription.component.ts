import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { UserConnect } from '../user-connect';

@Component({
  selector: 'app-confirmation-inscription',
  templateUrl: './confirmation-inscription.component.html',
  styleUrls: ['./confirmation-inscription.component.css']
})
export class ConfirmationInscriptionComponent implements OnInit {
user:User=new User();
score:any;
statut:any;
login:any;

  constructor(private route: Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.score=this.user.score;
    this.statut=this.user.statut;
    this.login=this.user.login;
    console.log('score',this.score);
    console.log('user',this.login);
    console.log('statut',this.statut);
  }

  renvoiAccueil() {
    this.route.navigateByUrl('accueil')
  }
}
