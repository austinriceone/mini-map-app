import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryFinderComponent} from './components/country-finder/country-finder.component';

const routes: Routes = [
  {
    path: 'countryfinder',
    children: [],
    component: CountryFinderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
