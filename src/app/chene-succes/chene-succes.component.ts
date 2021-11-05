import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chene-succes',
  templateUrl: './chene-succes.component.html',
  styleUrls: ['./chene-succes.component.css']
})
export class CheneSuccesComponent implements OnInit {

  constructor(private matdialogref:MatDialogRef<CheneSuccesComponent>) { }

  ngOnInit(): void {
  }
  fermeture(){
    this.matdialogref.close()
  
  }
}
