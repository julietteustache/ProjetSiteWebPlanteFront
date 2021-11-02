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
const routes: Routes = [
  {path:'formulaireEvent',component:FormulaireEventComponent},
  {path:'Evenement',component:EvenementComponent},
  {path: 'plante', component: PlantesComponent},
  
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'nouvellePlante', component: CreerPlanteComponent},
  {path : 'annonce', component:AnnonceComponent},
  {path: 'afficher_plante', component:AfficherPlanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
