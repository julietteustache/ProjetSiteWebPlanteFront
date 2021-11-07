import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nv-msg',
  templateUrl: './nv-msg.component.html',
  styleUrls: ['./nv-msg.component.css']
})
export class NvMsgComponent implements OnInit {
  user: any;
  idUser: any;

  destinataire:any;

  notification:any;

  nouveauMsg:any;

  constructor(private http:HttpClient, private route:Router, private uConnect:AuthService) { }

  ngOnInit(): void {
    this.user=this.uConnect.getUserConnect();
    this.idUser=this.user.idUser;
  }

  /*
  Faire une première partie recherche du destinataire par le nom et le prénom (bouton envoyer message non disponible)
  Quand destinataire trouvé, envoyer message devient "visible/accessible" et l'utilisateur peut envoyer le message
  */

  nvMsg(val: any): void {
    let message = {expediteur:this.user, destinataire:this.destinataire, message:val.message}
    this.http.post('http://localhost:8085/nvMsg', message).subscribe({
      next: (data) => {
        this.nouveauMsg = data;
        console.log(this.nouveauMsg);
        //this.route.navigateByUrl('msg_envoyes');
      },
      error: (err) => { console.log(err) }
    })
    
  }

}
