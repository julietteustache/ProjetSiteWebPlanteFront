import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adress } from '../adress';
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
adresse:Adress=new Adress
constructor(private uConnect:UserConnect,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.u=this.uConnect.user;
    this.nom=this.u.nom;
    this.prenom=this.u.prenom;
    this.login=this.u.login;
    this.adresse=this.u.adresse;
    this.rue=this.adresse.rue;
    this.cp=this.adresse.cp;
    this.ville=this.adresse.ville;

    
  }
modifUser(val:any){
  this.http.post('http://localhost:8085/modifuser/'+this.u.iduser,val).subscribe({
    next:(data)=>{this.u=data
      this.route.navigateByUrl('profil');

    },

    error:(err)=>{console.log(err)}
  })

}
}
