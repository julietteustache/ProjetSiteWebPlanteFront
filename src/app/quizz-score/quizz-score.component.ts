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

  question1 = [
    { id: 1, contenu: 'Un insecte qui s\'attaque aux arbres fruitiers', score: 0 },
    { id: 2, contenu: 'Une branche secondaire qui se développe sur la branche principale d\'une plante ', score: 100 },
    { id: 3, contenu: 'Une mauvaise herbe qui pousse aux pieds d\'une plante', score: 0 }];

  question2 = [
    { id: 1, contenu: 'Fleurit deux fois dans l\'année', score: 100 },
    { id: 2, contenu: 'Conserve ses feuilles toute l\'année', score: 0 },
    { id: 3, contenu: 'Pousse en grimpant', score: 0 }];

  question3 = [
    { id: 1, contenu: 'L\'arroser avec un brumisateur', score: 0 },
    { id: 2, contenu: 'Tremper les racines dans un mélange de fumier, de terre et d\'eau', score: 100 },
    { id: 3, contenu: 'Ajouter du sucre dans la terre pour améliorer la pousse', score: 0 }];
  constructor(private http: HttpClient, private route: Router, private subcribeS: SubscribeService) { }

  ngOnInit(): void {
  }

  calculscore(val: any): void {
   // console.log('la val du formulaire ', val);

    let score = val.score1 + val.score2 + val.score3;

   // console.log('score final ', score);
   // console.log('user en cour d\'inscription', this.subcribeS.user);

   this.subcribeS.user.score = score;

    this.http.put('http://localhost:8085/modifuser/' + this.subcribeS.user.idUser, this.subcribeS.user).subscribe({
      next: (data) => {
        this.user = data
        this.route.navigateByUrl('quizz-score')
      },
      error: (err) => { console.log(err) }
    })
  }

}
