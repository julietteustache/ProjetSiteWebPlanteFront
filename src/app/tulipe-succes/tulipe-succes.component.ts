import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tulipe-succes',
  templateUrl: './tulipe-succes.component.html',
  styleUrls: ['./tulipe-succes.component.css']
})
export class TulipeSuccesComponent implements OnInit {

  constructor(private matdialogref:MatDialogRef<TulipeSuccesComponent>) { }

  ngOnInit(): void {
  }
  fermeture(){
    this.matdialogref.close()
  
  }
}
