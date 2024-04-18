import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species/species.component';
import { SpeciesCardComponent } from './species-card/species-card.component';
import { SpeciesPageComponent } from './species-page/species-page.component';
import { SpeciesRoutingModule } from './planets-routing.module';



@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesCardComponent,
    SpeciesPageComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
  ]
})
export class SpeciesModule { }
