import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnonceComponent } from './annonce/annonce.component';

import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PlantesComponent } from './plantes/plantes.component';
import { FormsModule } from '@angular/forms';
import { EvenementSpecifiqueComponent } from './evenement-specifique/evenement-specifique.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreerPlanteComponent } from './creer-plante/creer-plante.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    FormulaireEventComponent,
    EvenementComponent,
    PlantesComponent,
    EvenementSpecifiqueComponent,
    ConnexionComponent,
    InscriptionComponent,
    CreerPlanteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
