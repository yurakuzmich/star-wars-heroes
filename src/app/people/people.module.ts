import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { SwheroComponent } from './swhero/swhero.component';
import { SwheroCardComponent } from './swhero-card/swhero-card.component';



@NgModule({
  declarations: [
    PeopleComponent,
    SwheroComponent,
    SwheroCardComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
  ]
})
export class PeopleModule { }
