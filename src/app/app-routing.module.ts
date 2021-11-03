import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementSpecifiqueComponent } from './evenement-specifique/evenement-specifique.component';
import { AnnonceComponent } from './annonce/annonce.component';




import { CreerPlanteComponent } from './creer-plante/creer-plante.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { PlantesComponent } from './plantes/plantes.component';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ValidEventComponent } from './valid-event/valid-event.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
const routes: Routes = [
  {path:'formulaireEvent',component:FormulaireEventComponent},
  {path:'Evenement',component:EvenementComponent},
  {path: 'plante', component: PlantesComponent},
  
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'nouvellePlante', component: CreerPlanteComponent},
  {path : 'annonce', component:AnnonceComponent},
  {path:'validevent',component:ValidEventComponent},
  {path:'calendrier',component:CalendrierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
