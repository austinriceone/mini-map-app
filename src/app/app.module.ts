import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryFinderComponent } from './components/country-finder/country-finder.component';
import {GoogleMapComponent} from './components/google-map/google-map.component';
import {CountryListComponent} from './components/country-list/country-list.component';
import {CountryFilterComponent} from './components/country-filter/country-filter.component';
import {AgmCoreModule} from '@agm/core';
import {CountryFilterPipe} from './pipes/country-filter.pipe';
import {CountriesService} from './services/countries.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountryFinderComponent,
    GoogleMapComponent,
    CountryListComponent,
    CountryFilterComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyACSeDuVHCxogese2RS8PpmRHt7Ggs-MMU'
    })
  ],
  providers: [CountryFilterPipe, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
