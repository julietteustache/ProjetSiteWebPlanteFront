import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireEventComponent } from './formulaire-event/formulaire-event.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PlantesComponent } from './plantes/plantes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireEventComponent,
    EvenementComponent,
    PlantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
