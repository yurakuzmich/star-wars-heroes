import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { ItemCardComponent } from '../layout/item-card/item-card.component';



@NgModule({
  declarations: [
    PlanetComponent,
    PlanetsComponent,
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    ItemCardComponent,
  ]
})
export class PlanetsModule { }
