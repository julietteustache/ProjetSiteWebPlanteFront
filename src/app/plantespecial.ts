import { Injectable } from '@angular/core'; 
import { Plante } from './plante';

@Injectable({
  providedIn: 'root'
})

export class Plantespecial extends Plante{

    plante: Plante=new Plante;
    p:any;
    constructor() {
        super()
    }

    setPlante(p: any): void{
      localStorage.setItem('planteStockee', JSON.stringify(p));
    }
  
    getPlante(): any {
      this.p = localStorage.getItem('planteStockee');
      return JSON.parse(this.p);
    }
    
}
