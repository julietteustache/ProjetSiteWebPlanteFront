import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creer-plante',
  templateUrl: './creer-plante.component.html',
  styleUrls: ['./creer-plante.component.css']
})
export class CreerPlanteComponent implements OnInit {
  msg:any;
  plante:any;
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  creerPlante(val:any): void{
    //console.log(val);
    this.http.post('http://localhost:8085/creerplante', val).subscribe({
      next:(data)=>{this.plante=data;
      this.route.navigateByUrl('liste_plantes');
    },
      error:(err)=>{console.log(err)}
    })
  }

}
