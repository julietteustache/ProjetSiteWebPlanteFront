import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {
u:any;
score:any;
diff:any;
  constructor(private matdialogref:MatDialogRef<NiveauComponent>,public connexion:AuthService) { }

  ngOnInit(): void {
    this.u=this.connexion.getUserConnect();
    this.score=this.u.score;
    this.diff=1000-this.score;
  }
fermeture(){
  this.matdialogref.close()

}
}
