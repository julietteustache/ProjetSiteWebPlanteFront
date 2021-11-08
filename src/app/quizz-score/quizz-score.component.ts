import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationInscriptionComponent } from '../confirmation-inscription/confirmation-inscription.component';
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
    { id: 2, contenu: 'Une branche secondaire qui se développe sur la branche principale d\'une plante ', score: 50 },
    { id: 3, contenu: 'Une mauvaise herbe qui pousse aux pieds d\'une plante', score: 0 }];

  question2 = [
    { id: 1, contenu: 'Fleurit deux fois dans l\'année', score: 50 },
    { id: 2, contenu: 'Conserve ses feuilles toute l\'année', score: 0 },
    { id: 3, contenu: 'Pousse en grimpant', score: 0 }];

  question3 = [
    { id: 1, contenu: 'L\'arroser avec un brumisateur', score: 0 },
    { id: 2, contenu: 'Tremper les racines dans un mélange de fumier, de terre et d\'eau', score: 50 },
    { id: 3, contenu: 'Ajouter du sucre dans la terre pour améliorer la pousse', score: 0 }];

  question4 = [
    { id: 1, contenu: 'A la lune croissante', score: 0 },
    { id: 2, contenu: 'A la pleine lune', score: 0 },
    { id: 3, contenu: 'A la lune décroissante', score: 50 }];

  question5 = [
    { id: 1, contenu: 'Une plante grasse', score: 0 },
    { id: 2, contenu: 'Une mauvaise herbe', score: 50 },
    { id: 3, contenu: 'Une pousse qui émerge d\'une racine', score: 0 }];
    
  question6 = [
    { id: 1, contenu: 'Effectuer une taille courte', score: 50 },
    { id: 2, contenu: 'Faire un monticule de terre à la racine', score: 0 },
    { id: 3, contenu: 'Ôter les feuilles mortes d\'une plante', score: 0 }];
  
  constructor(private http: HttpClient, private route: Router, private subcribeS: SubscribeService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user=this.subcribeS.user;
  }

  calculscore(val: any): void {
   // console.log('la val du formulaire ', val);

    let score = val.score1 + val.score2 + val.score3;
    let niveau = 'Petit cactus';
    if (score >= 100) {niveau = 'Tulipe printanière'}
    else if (score >= 500) {niveau = 'Buisson ardent'}
    else if (score >= 1000) {niveau = 'Grand chêne'}
    else if (score >= 5000) {niveau = 'Olivier centenaire'}

   // console.log('score final ', score);
   // console.log('user en cour d\'inscription', this.subcribeS.user);

   this.user.score = score;
   this.user.statut = niveau;

    this.http.put('http://localhost:8085/modifuser/' + this.subcribeS.user.idUser, this.subcribeS.user).subscribe({
      next: (data) => {
        this.user = data
        localStorage.setItem('userConnect', JSON.stringify(this.user));
        //this.route.navigateByUrl('quizz_score')
        const mydialog = this.dialog.open(ConfirmationInscriptionComponent, {height:'auto', width: '800px',})
      },
      error: (err) => { console.log(err) }
    })
  }


}
