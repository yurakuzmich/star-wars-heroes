import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { StarshipPageComponent } from './starship-page/starship-page.component';
import { StarshipsRoutingModule } from './planets-routing.module';
import { ItemCardComponent } from '../layout/item-card/item-card.component';



@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipCardComponent,
    StarshipPageComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    ItemCardComponent,
  ]
})
export class StarshipsModule { }
