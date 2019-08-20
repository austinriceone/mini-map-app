import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryFinderComponent} from './components/country-finder/country-finder.component';

const routes: Routes = [
  {
    path: 'countryfinder',
    children: [],
    component: CountryFinderComponent
  },
  {
    path: '',
    redirectTo: '/countryfinder',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
