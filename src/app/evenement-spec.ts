 
import { Injectable } from '@angular/core'; 
import { Evenement } from './evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementSpec extends Evenement {

  
  
 
  evenement: Evenement = new Evenement;
  constructor() { 
    super()
  }
}

