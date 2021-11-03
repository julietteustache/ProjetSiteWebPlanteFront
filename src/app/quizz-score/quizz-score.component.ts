import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-quizz-score',
  templateUrl: './quizz-score.component.html',
  styleUrls: ['./quizz-score.component.css']
})
export class QuizzScoreComponent implements OnInit {
  msg: any;
  user: any;

  // question1: string[] = ['Un insecte qui s\'attaque aux arbres fruitiers', 'Une branche secondaire qui se développe sur la branche principale d\'une plante ', 'Une mauvaise herbe qui pousse aux pieds d\'une plante'];
  question1 = [
    { id: 1, contenue: 'Un insecte qui s\'attaque aux arbres fruitiers', score: 0 },
    { id: 2, contenue: 'Une branche secondaire qui se développe sur la branche principale d\'une plante ', score: 50 },
    { id: 3, contenue: 'Une mauvaise herbe qui pousse aux pieds d\'une plante', score: 0 }];
  constructor(private http: HttpClient, private route: Router, private subcribeS: SubscribeService) { }

  ngOnInit(): void {
  }

  calculscore(val: any): void {
    console.log('la val du formulaire ', val);

     let score = val.score1 + val.score2 ;

     this.http.post('http://localhost:8085/modifuser/' + this.subcribeS.user.id, score).subscribe({
       next:(data)=>{this.user=data
       this.route.navigateByUrl('quizz-score')},
       error:(err)=>{console.log(err)}
     })
  }

}
