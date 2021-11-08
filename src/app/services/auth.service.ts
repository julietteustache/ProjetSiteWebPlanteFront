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
  gestionScore(){
    
    if (this.getUserConnect().score>=50 && this.getUserConnect().score<100){
      this.getUserConnect().statut='intermédiaire';
      localStorage.setItem('userConnect', JSON.stringify(this.getUserConnect()));
      this.http.put('http://localhost:8085/modifuser/' + this.getUserConnect().idUser, this.getUserConnect()).subscribe({
            next: (data) => {
              this.setUserInSession(data);
              
            },
            error: (err) => { console.log(err) }
          })
    }
    else if (this.getUserConnect().score>=100 && this.getUserConnect().score<500){
      this.getUserConnect().statut='avancé';
      localStorage.setItem('userConnect', JSON.stringify(this.getUserConnect()));
      this.http.put('http://localhost:8085/modifuser/' + this.getUserConnect().idUser, this.getUserConnect()).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
    else if (this.getUserConnect().score>=500 && this.getUserConnect().score<1000){
      this.getUserConnect().statut='expert';
      localStorage.setItem('userConnect', JSON.stringify(this.getUserConnect()));
      this.http.put('http://localhost:8085/modifuser/' + this.getUserConnect().idUser, this.getUserConnect()).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
    else if (this.getUserConnect().score>=1000){
      this.getUserConnect().statut='maitre';
      localStorage.setItem('userConnect', JSON.stringify(this.getUserConnect()));
      this.http.put('http://localhost:8085/modifuser/' + this.getUserConnect().idUser, this.getUserConnect()).subscribe({
        next: (data) => {
          this.setUserInSession(data);
        },
        error: (err) => { console.log(err) }
      })
    }
  }
}
