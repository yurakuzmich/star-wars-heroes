import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { SwheroComponent } from './swhero/swhero.component';
import { ItemCardComponent } from '../layout/item-card/item-card.component';

@NgModule({
  declarations: [
    PeopleComponent,
    SwheroComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ItemCardComponent,
  ]
})
export class PeopleModule { }
