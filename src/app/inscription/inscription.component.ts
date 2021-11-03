import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  msg: any;
  user: any;

  constructor(private http: HttpClient, private route: Router, private subscribeS: SubscribeService) { }

  ngOnInit(): void {
  }

  inscription(val: any): void {
    this.http.post('http://localhost:8085/inscription', val).subscribe({
      next: (data) => {
        this.user = data
        this.subscribeS.user = this.user;
        this.route.navigateByUrl('quizz-score')
      },
      error: (err) => { console.log(err) }
    })
  }
}
