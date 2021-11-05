import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-technique',
  templateUrl: './creer-technique.component.html',
  styleUrls: ['./creer-technique.component.css']
})
export class CreerTechniqueComponent implements OnInit {

  technique:any;

  constructor(private http:HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  creerTechnique(val:any): void{
    this.http.post('http://localhost:8085/creertechnique', val).subscribe({
      next:(data)=>{this.technique=data;
        this.route.navigateByUrl('techniques');},
      error:(err)=>{console.log(err)}
    })
  }

}
