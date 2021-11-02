import { Injectable } from '@angular/core'; 
import { Plante } from './plante';

@Injectable({
  providedIn: 'root'
})

export class Plantespecial extends Plante{

    plante: Plante=new Plante;
    constructor() {
        super()
    }
    
}
