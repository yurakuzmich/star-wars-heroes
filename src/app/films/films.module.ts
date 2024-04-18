import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { FilmsRoutingModule } from './films-routing.module';
import { ItemCardComponent } from '../layout/item-card/item-card.component';



@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    ItemCardComponent,
  ]
})
export class FilmsModule { }
