import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communaute',
  templateUrl: './communaute.component.html',
  styleUrls: ['./communaute.component.css']
})
export class CommunauteComponent implements OnInit {

  publications:any;

  notification:any;

  auteur:any;

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.recupPublis()
  }

  recupPublis(): void {
    this.http.get('http://localhost:8085/allpublis').subscribe({
      next: (data) => {
        this.publications = data;
      },
      error: (err) => { console.log(err) }

    });
  }

  changeFormatMedia(media:any):any{
    return window.atob(media);
  }

  mediaExist(media:any) : boolean {
    if (media!=null) {
      return true;
    }
    else {
      return false;
    }
  }

  findUser(val:any): void {
    this.http.get('http://localhost:8085/user/'+val.nom+"/"+val.prenom).subscribe({
      next: (data) => {
        this.auteur = data;
        if(this.auteur==null) {
          this.notification="Utilisateur non trouvé, veuillez réessayer"
        }
        else {
          this.http.get('http://localhost:8085/publications/' + this.auteur.idUser).subscribe({
      next: (data) => {
        this.publications = data;
      },
      error: (err) => { console.log(err) }

    });
        }
      },
      error: (err) => { console.log(err) }

    });
  }

  goPublier(): void {
    this.route.navigateByUrl('nv_publication');
}

}
