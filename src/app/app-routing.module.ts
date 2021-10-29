import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantesComponent } from './plantes/plantes.component';

const routes: Routes = [
  {path: 'liste_plantes', component: PlantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
