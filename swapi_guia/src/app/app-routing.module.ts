import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { IndiceComponent } from './components/indice/indice.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import {PeopleDetailsComponent} from "./components/people-details/people-details.component";
import { PlanetsDetailsComponent } from './components/planets-details/planets-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/indice', pathMatch: 'full' },
  {path: 'films', children: [
      {path: '', component: FilmsComponent},
      {path: ':id', component: FilmsDetailsComponent}
    ]},
  {path: 'people', children: [
      {path: '', component: PeopleComponent},
      {path: ':id', component: PeopleDetailsComponent}
    ]},
  {path: 'species', children:[
    {path: '', component: SpeciesComponent},
    {path: ':id', component: SpeciesDetailsComponent}
  ]},
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'starships', component: StarshipsComponent },
  {
    path: 'planets',
    children: [
      { path: '', component: PlanetsComponent },
      { path: ':id', component: PlanetsDetailsComponent },
    ],
  },
  { path: 'indice', component: IndiceComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
