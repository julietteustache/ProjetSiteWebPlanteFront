import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarDecoComponent } from './navbar-deco/navbar-deco.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { collectExternalReferences } from '@angular/compiler';
import { TulipeSuccesComponent } from './tulipe-succes/tulipe-succes.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetSiteWebPlante';
  u:any;
  score:any;
  test1:any;
  test2:any;
  test3:any;
  test4:any;
  constructor(private route: Router, public auth: AuthService, private dialog: MatDialog,private http:HttpClient) { }

  ngOnInit(): void {
  console.log('connexion :', this.auth.isConnected());
  this.u=this.auth.getUserConnect;
  this.test1=true;
  this.test2=true;
  this.test3=true;
  this.test4=true;
  this.score=this.u.score;
  console.log(this.u)

  /*if (this.score>=50 && this.score<100){
    this.u.statut='intermédiaire';
    localStorage.setItem('userConnect', JSON.stringify(this.u));
    this.http.put('http://localhost:8085/modifuser/' + this.u.idUser, this.u).subscribe({
          next: (data) => {
            this.u = data;
            
          },
          error: (err) => { console.log(err) }
        })
  }
  else if (this.score>=100 && this.score<500){
    this.u.statut='avancé';
    localStorage.setItem('userConnect', JSON.stringify(this.u));
    this.http.put('http://localhost:8085/modifuser/' + this.u.idUser, this.u).subscribe({
      next: (data) => {
        this.u = data;
      },
      error: (err) => { console.log(err) }
    })
  }
  else if (this.score>=500 && this.score<1000){
    this.u.statut='expert';
    localStorage.setItem('userConnect', JSON.stringify(this.u));
    this.http.put('http://localhost:8085/modifuser/' + this.u.idUser, this.u).subscribe({
      next: (data) => {
        this.u = data;
      },
      error: (err) => { console.log(err) }
    })
  }
  else if (this.score>=1000){
    this.u.statut='maitre';
    localStorage.setItem('userConnect', JSON.stringify(this.u));
    this.http.put('http://localhost:8085/modifuser/' + this.u.idUser, this.u).subscribe({
      next: (data) => {
        this.u = data;
      },
      error: (err) => { console.log(err) }
    })
  }
  /*if (this.score=50 && this.test1==true){
    //nconst mydialog=this.dialog.open(TulipeSuccesComponent);
    this.test1=false;
  }
  else if (this.score=500 && this.test2==true){
    //const mydialog=this.dialog.open();
    this.test2=false;
  }
  else if (this.score=1000 && this.test3==true){
    //const mydialog=this.dialog.open();
    this.test3=false;
  }
  else if (this.score=5000){
    //const mydialog=this.dialog.open();
    this.test4=false;
  }

}*/
}}
