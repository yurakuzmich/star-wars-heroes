import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import { FilmsRoutingModule } from './films-routing.module';



@NgModule({
  declarations: [
    FilmCardComponent,
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
  ]
})
export class FilmsModule { }
