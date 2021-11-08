import { Component, OnInit } from '@angular/core';
import { Adress } from '../adress';
import { AuthService } from '../services/auth.service';
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
adresse:Adress=new Adress;
statut:any;
score:any;
rue:any;
cp:any;
ville:any;
  constructor(private uConnect:AuthService,) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.login=this.user.login;
    this.adresse=this.user.adresse;
    this.rue=this.adresse.rue;
    this.cp=this.adresse.cp;
    this.ville=this.adresse.ville;
    this.statut=this.user.statut;
    this.score=this.user.score;
    console.log(this.score)
  }

}
