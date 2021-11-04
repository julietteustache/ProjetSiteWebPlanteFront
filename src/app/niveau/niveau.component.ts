import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {

  constructor(private matdialogref:MatDialogRef<NiveauComponent>) { }

  ngOnInit(): void {
  }
fermeture(){
  this.matdialogref.close()

}
}
