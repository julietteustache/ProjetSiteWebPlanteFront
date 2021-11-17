
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  user:any;
  idUser:any;

  publications:any;

  constructor(private http:HttpClient, private route:Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
    this.recupPublis();
  }

  recupPublis(): void {
    this.http.get('http://localhost:8085/publications/' + this.idUser).subscribe({
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

}
