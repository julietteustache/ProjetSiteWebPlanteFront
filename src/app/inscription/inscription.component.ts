import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  msg: any;
  user:any;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  inscription(val:any): void{
    this.http.post('http://localhost:8085/inscription', val).subscribe({
      next:(data)=>{this.user=data
      this.route.navigateByUrl('quizz-score')},
      error:(err)=>{console.log(err)}
    })
  }
}
