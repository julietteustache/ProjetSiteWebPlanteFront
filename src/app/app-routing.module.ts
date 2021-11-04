import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherPlanteComponent } from './afficher-plante/afficher-plante.component';
import { EvenementSpecifiqueComponent } from './evenement-specifique/evenement-specifique.component';
import { AnnonceComponent } from './annonce/annonce.component';


import { CreerPlanteComponent } from './creer-plante/creer-plante.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { PlantesComponent } from './plantes/plantes.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { QuizzScoreComponent } from './quizz-score/quizz-score.component';
import { ConfirmationInscriptionComponent } from './confirmation-inscription/confirmation-inscription.component';
import { ValidEventComponent } from './valid-event/valid-event.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommandeComponent } from './commande/commande.component';
import { ValidCommandeComponent } from './valid-commande/valid-commande.component';

import { DocumentationComponent } from './documentation/documentation.component';
import { ModifPlanteComponent } from './modif-plante/modif-plante.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ModilprofilComponent } from './modilprofil/modilprofil.component';

const routes: Routes = [
  {path:'formulaireEvent',component:FormulaireEventComponent},
  {path:'evenement',component:EvenementComponent},
  {path: 'liste_plantes', component: PlantesComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path:'modifuser',component:ModilprofilComponent},
  
  // INSCRIPTION ET CONNEXION
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'quizz_score', component: QuizzScoreComponent},
  {path: 'confirmation_inscription', component: ConfirmationInscriptionComponent},
  {path : 'commande', component: CommandeComponent},
  {path: 'nouvellePlante', component: CreerPlanteComponent},
  {path : 'annonce', component:AnnonceComponent},
  {path:'validevent',component:ValidEventComponent},
  {path:'calendrier',component:CalendrierComponent},
  {path: 'afficher_plante', component:AfficherPlanteComponent},
  {path:'profil',component:ProfilComponent},
  {path:'accueil',component:AccueilComponent},
  {path: 'modif_plante', component:ModifPlanteComponent},
  {path:'messagerie',component:MessagerieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
