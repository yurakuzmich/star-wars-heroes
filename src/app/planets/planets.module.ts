import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { PlanetsRoutingModule } from './planets-routing.module';



@NgModule({
  declarations: [
    PlanetComponent,
    PlanetsComponent,
    PlanetCardComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
  ]
})
export class PlanetsModule { }
