import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-msg-recus',
  templateUrl: './msg-recus.component.html',
  styleUrls: ['./msg-recus.component.css']
})
export class MsgRecusComponent implements OnInit {

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
    this.http.get('http://localhost:8085/destinataire/' + this.idUser).subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (err) => { console.log(err) }

    });
  }

}
