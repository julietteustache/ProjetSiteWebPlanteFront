import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-olivier-succes',
  templateUrl: './olivier-succes.component.html',
  styleUrls: ['./olivier-succes.component.css']
})
export class OlivierSuccesComponent implements OnInit {

  constructor(private matdialogref:MatDialogRef<OlivierSuccesComponent>) { }

  ngOnInit(): void {
  }
  fermeture(){
    this.matdialogref.close()
  
  }
}
