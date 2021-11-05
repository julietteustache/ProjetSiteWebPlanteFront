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
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CreerPlanteComponent } from './creer-plante/creer-plante.component';

import { ValidEventComponent } from './valid-event/valid-event.component';

import { AfficherPlanteComponent } from './afficher-plante/afficher-plante.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzScoreComponent } from './quizz-score/quizz-score.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';

import { MatRadioModule } from '@angular/material/radio';
import { NavdocComponent } from './navdoc/navdoc.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ModifPlanteComponent } from './modif-plante/modif-plante.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ModilprofilComponent } from './modilprofil/modilprofil.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';
import { CommandeComponent } from './commande/commande.component';
import { ValidCommandeComponent } from './valid-commande/valid-commande.component';
import { NiveauComponent } from './niveau/niveau.component';
import { ConfirmationInscriptionComponent } from './confirmation-inscription/confirmation-inscription.component';
import { TechniquesComponent } from './techniques/techniques.component';
import { AfficherTechniqueComponent } from './afficher-technique/afficher-technique.component';
import { NavbarDecoComponent } from './navbar-deco/navbar-deco.component';
import { TulipeSuccesComponent } from './tulipe-succes/tulipe-succes.component';
import { RoseSuccesComponent } from './rose-succes/rose-succes.component';
import { CheneSuccesComponent } from './chene-succes/chene-succes.component';
import { OlivierSuccesComponent } from './olivier-succes/olivier-succes.component';



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
    CreerPlanteComponent,
    ValidEventComponent,



    CreerPlanteComponent,
    AfficherPlanteComponent,


    ConnexionComponent,
    InscriptionComponent,
    CreerPlanteComponent,
    QuizzScoreComponent,
    NavbarComponent,
    ProfilComponent,
    AccueilComponent,

    NavdocComponent,
    DocumentationComponent,
    ModifPlanteComponent,
    MessagerieComponent,
    ModilprofilComponent,
    FormulaireAnnonceComponent,
    CommandeComponent,
    ValidCommandeComponent,
    NiveauComponent,
    ConfirmationInscriptionComponent,
    NavbarDecoComponent,
    TulipeSuccesComponent,
    RoseSuccesComponent,
    CheneSuccesComponent,
    OlivierSuccesComponent,
    TechniquesComponent,
    AfficherTechniqueComponent,
    NavbarDecoComponent
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
   NgMultiSelectDropDownModule,

    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
