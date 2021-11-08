import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adress } from '../adress';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { UserConnect } from '../user-connect';

@Component({
  selector: 'app-modilprofil',
  templateUrl: './modilprofil.component.html',
  styleUrls: ['./modilprofil.component.css']
})
export class ModilprofilComponent implements OnInit {
u:any;
nom:any;
prenom:any;
login:any;
rue:any;
cp:any;
ville:any;
adresse:Adress=new Adress;
mdp:any;
a:any;
constructor(private uConnect:AuthService,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.u=this.uConnect.getUserConnect();
    this.nom=this.u.nom;
    this.prenom=this.u.prenom;
    this.login=this.u.login;
    this.adresse=this.u.adresse;
    this.rue=this.adresse.rue;
    this.cp=this.adresse.cp;
    this.ville=this.adresse.ville;


    
  }
modifUser(val:any){
  this.u.nom=val.nom;
  this.u.prenom=val.prenom;
  this.u.login=val.login;
  this.adresse.rue=val.rue;
  this.adresse.cp=val.cp;
  this.adresse.ville=val.ville;
  this.http.put('http://localhost:8085/modifadresse/'+this.u.adresse.idAdresse,this.adresse).subscribe({
    next:(data)=>{this.a=data;
      this.route.navigateByUrl('profil');
      this.u.adresse=this.a;
    },

    error:(err)=>{console.log(err)}
  })

  localStorage.setItem('userConnect', JSON.stringify(this.u));
  this.http.put('http://localhost:8085/modifuser/'+this.u.idUser,this.u).subscribe({
    next:(data)=>{this.u=data;
      this.route.navigateByUrl('profil');

    },

    error:(err)=>{console.log(err)}
  })

}
}
