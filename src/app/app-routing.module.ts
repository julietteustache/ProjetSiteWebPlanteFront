import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { PlantesComponent } from './plantes/plantes.component';
const routes: Routes = [
  {path:'formulaireEvent',component:FormulaireEventComponent},
  {path:'Evenement',component:EvenementComponent},
  {path: 'plante', component: PlantesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
