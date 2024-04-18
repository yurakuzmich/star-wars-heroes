import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ItemCardComponent } from '../layout/item-card/item-card.component';



@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclePageComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ItemCardComponent,
  ]
})
export class VehiclesModule { }
