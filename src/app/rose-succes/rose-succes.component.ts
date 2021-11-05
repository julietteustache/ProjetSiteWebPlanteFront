import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rose-succes',
  templateUrl: './rose-succes.component.html',
  styleUrls: ['./rose-succes.component.css']
})
export class RoseSuccesComponent implements OnInit {

  constructor(private matdialogref:MatDialogRef<RoseSuccesComponent>) { }

  ngOnInit(): void {
  }
  fermeture(){
    this.matdialogref.close()
  
  }
}
