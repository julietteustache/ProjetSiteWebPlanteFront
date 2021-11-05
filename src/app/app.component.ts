import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarDecoComponent } from './navbar-deco/navbar-deco.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetSiteWebPlante';

  constructor(private route: Router, public auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  console.log('connexion :', this.auth.isConnected());
  }

}
