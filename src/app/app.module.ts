import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

import { AnnonceComponent } from './annonce/annonce.component';

import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PlantesComponent } from './plantes/plantes.component';
import { FormsModule } from '@angular/forms';
import { EvenementSpecifiqueComponent } from './evenement-specifique/evenement-specifique.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreerPlanteComponent } from './creer-plante/creer-plante.component';

import { AfficherPlanteComponent } from './afficher-plante/afficher-plante.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzScoreComponent } from './quizz-score/quizz-score.component';



@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    FormulaireEventComponent,
    EvenementComponent,
    PlantesComponent,
    EvenementSpecifiqueComponent,

    CreerPlanteComponent,
    AfficherPlanteComponent,
    
   
    ConnexionComponent,
    InscriptionComponent,
    CreerPlanteComponent,
    QuizzScoreComponent
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
   ReactiveFormsModule, 
   NgMultiSelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
