import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserConnect } from '../user-connect';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
user:User=new User();
nom:any;
prenom:any;
login:any;
adresse:any;
statut:any;
score:any;

  constructor(private uConnect:UserConnect,) { }

  ngOnInit(): void {
    this.user=this.uConnect.user;
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.login=this.user.login;
    this.adresse=this.user.adresse;
    this.statut=this.user.statut;
    this.score=this.user.score;

  }

}
