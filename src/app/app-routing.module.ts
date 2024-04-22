import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AccessDeniedComponent } from './layout/access-denied/access-denied.component';

const routes: Routes = [
  {path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule), canActivate: [AuthGuard]},
  {path: 'planets', loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule), canActivate: [AuthGuard]},
  {path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule), canActivate: [AuthGuard]},
  {path: 'species', loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule), canActivate: [AuthGuard]},
  {path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule), canActivate: [AuthGuard]},
  {path: 'starships', loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule), canActivate: [AuthGuard]},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: '', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
