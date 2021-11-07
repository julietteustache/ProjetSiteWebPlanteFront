import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-msg-envoyes',
  templateUrl: './msg-envoyes.component.html',
  styleUrls: ['./msg-envoyes.component.css']
})
export class MsgEnvoyesComponent implements OnInit {

  messages:any;

  user:any;
  idUser:any;

  constructor(private http:HttpClient, private route:Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
    this.recupMsg();
  }

  recupMsg(): void {
    this.http.get('http://localhost:8085/expediteur/' + this.idUser).subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => { console.log(err) }

    });
  }

}
