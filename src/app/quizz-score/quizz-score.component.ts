import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz-score',
  templateUrl: './quizz-score.component.html',
  styleUrls: ['./quizz-score.component.css']
})
export class QuizzScoreComponent implements OnInit {
  msg: any;
  user:any;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  calculscore(val:any): void{
    this.http.post('http://localhost:8085/modifuser/{idUser}', val).subscribe({
      next:(data)=>{this.user=data
      this.route.navigateByUrl('quizz-score')},
      error:(err)=>{console.log(err)}
    })
  }

}
