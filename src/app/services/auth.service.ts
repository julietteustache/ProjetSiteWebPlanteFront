import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  msgErr = '';
  connect = false;
  constructor(private route: Router,private http:HttpClient) { }

  setUserInSession(u: any): void{
    localStorage.setItem('userConnect', JSON.stringify(u));
  }

  getUserConnect(): any {
    this.user = localStorage.getItem('userConnect');
    return JSON.parse(this.user);
  }

  deconnexion(): void{
    localStorage.removeItem('userConnect');
    this.route.navigateByUrl('accueil');
  }

  isConnected(): boolean {
    if(this.getUserConnect() != null){
      return true;
    }
    else {
      return false;
    }
  }

  isNotConnected(): boolean {
    if(this.getUserConnect() != null){
      return false;
    }
    else {
      return true;
    }
  }
  
  canActive() {
    if(!this.isConnected()) {this.route.navigateByUrl('connexion'); this.msgErr = 'Veuillez vous connecter';}
  }

  redirectToHomeIfConnect() {
    if(this.isConnected()){
      this.route.navigateByUrl('accueil');
    }
  }
  gestionScore(u:any){
    
    if (u.score>=50 && u.score<100){
      this.getUserConnect().statut="Tulipe printanière";
      console.log(u.statut)
      localStorage.setItem('userConnect', JSON.stringify(u));
      this.http.put('http://localhost:8085/modifuser/' + u.idUser, u).subscribe({
            next: (data) => {
              this.setUserInSession(data);
              
            },
            error: (err) => { console.log(err) }
          })
    }
    else if (u.score>=100 && u.score<500){
      u.statut='avancé';
      localStorage.setItem('userConnect', JSON.stringify(u));
      this.http.put('http://localhost:8085/modifuser/' + u.idUser, u).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
    else if (u.score>=500 && u.score<1000){
      u.statut='expert';
      localStorage.setItem('userConnect', JSON.stringify(u));
      this.http.put('http://localhost:8085/modifuser/' + u.idUser,u).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
    else if (u.score>=1000){
      u.statut='maitre';
      localStorage.setItem('userConnect', JSON.stringify(u));
      this.http.put('http://localhost:8085/modifuser/' + u.idUser, u).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
  }
}
