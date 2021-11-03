
import { Injectable } from '@angular/core'; 
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserConnect  extends User {

  
  
 
  user: User = new User;
  constructor() { 
    super()
  }
}

