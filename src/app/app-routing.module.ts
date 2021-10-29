import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementComponent } from './evenement/evenement.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';

const routes: Routes = [
  {path:'formulaireEvent',component:FormulaireEventComponent},
  {path:'Evenement',component:EvenementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
