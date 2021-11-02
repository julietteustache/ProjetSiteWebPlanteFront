import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnonceComponent } from './annonce/annonce.component';

import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PlantesComponent } from './plantes/plantes.component';
import { FormsModule } from '@angular/forms';
import { EvenementSpecifiqueComponent } from './evenement-specifique/evenement-specifique.component';
<<<<<<< HEAD
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
=======
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreerPlanteComponent } from './creer-plante/creer-plante.component';
>>>>>>> 11b5df1d1ea157acf6477a812edaa7aee2a9aba3

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    FormulaireEventComponent,
    EvenementComponent,
    PlantesComponent,
    EvenementSpecifiqueComponent,
<<<<<<< HEAD
    
   
=======
    ConnexionComponent,
    InscriptionComponent,
    CreerPlanteComponent

>>>>>>> 11b5df1d1ea157acf6477a812edaa7aee2a9aba3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
   BrowserAnimationsModule,
   MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
