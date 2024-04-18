import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/main-page/main-page.component';

const routes: Routes = [
  {path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)},
  {path: 'planets', loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule)},
  {path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)},
  {path: 'species', loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule)},
  {path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)},
  {path: 'starships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule)},
  {path: '', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
