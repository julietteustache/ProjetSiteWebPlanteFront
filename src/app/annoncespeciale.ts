import { Injectable } from '@angular/core'; 
import { Annonce } from './annonce';
@Injectable({
    providedIn: 'root'
  })

export class Annoncespeciale extends Annonce {
    annonce : Annonce=new Annonce;
    constructor(){
        super()
    }



}




