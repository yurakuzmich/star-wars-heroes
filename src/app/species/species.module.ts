import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from './species/species.component';
import { SpeciesPageComponent } from './species-page/species-page.component';
import { SpeciesRoutingModule } from './planets-routing.module';
import { ItemCardComponent } from '../layout/item-card/item-card.component';



@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesPageComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    ItemCardComponent,
  ]
})
export class SpeciesModule { }
