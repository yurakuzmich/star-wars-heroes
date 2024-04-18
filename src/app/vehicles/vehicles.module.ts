import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';



@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleCardComponent,
    VehiclePageComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
  ]
})
export class VehiclesModule { }
