import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-creer-publication',
  templateUrl: './creer-publication.component.html',
  styleUrls: ['./creer-publication.component.css']
})
export class CreerPublicationComponent implements OnInit {

  publication: any;

  user: any;
  score: any;
  idUser: any;
  mediaUrl: any;

  constructor(private http: HttpClient, private route: Router, private uConnect: AuthService) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
    this.score=this.user.score;

  }

  creerPubli(val: any): void {
    if (this.mediaUrl!=null) {
      val.image=window.btoa(this.mediaUrl);
    }
    let publi = {auteur:this.user, contenu:val.contenu,image:val.image}
    this.http.post('http://localhost:8085/nv_publication', publi).subscribe({
      next: (data) => {
        this.publication = data;
        this.route.navigateByUrl('publications');

        this.score = this.score + 100;

        this.user.score = this.score;
        localStorage.setItem('userConnect', JSON.stringify(this.user));
        this.http.put('http://localhost:8085/modifuser/' + this.idUser, this.user).subscribe({
          next: (data) => {
            this.user = data;
            this.uConnect.gestionScore(this.user)
          },
          error: (err) => { console.log(err) }
        })
      },
      error: (err) => { console.log(err) }
    })
  }

  onFileChanged(event: any): any {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.mediaUrl = reader.result;
    };
  }

}
