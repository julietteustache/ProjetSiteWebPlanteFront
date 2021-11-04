import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;
  msgErr = '';
  connect = false;
  constructor(private route: Router) { }

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

  canActive() {
    if(!this.isConnected()) {this.route.navigateByUrl('connexion'); this.msgErr = 'veuillez vous conncter';}
  }

  redirectToHomeIfConnect() {
    if(this.isConnected()){
      this.route.navigateByUrl('accueil');
    }
  }
}
