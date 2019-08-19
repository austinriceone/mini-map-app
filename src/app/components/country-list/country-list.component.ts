import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {Country} from '../../dtos/country';
import {CountryFilterPipe} from '../../pipes/country-filter.pipe';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  constructor(private countriesService: CountriesService, private countryFilterPipe: CountryFilterPipe) {
  }

  countryList: Array<Country>;
  filteredCountries: Array<Country>;
  selectedCountry: Country;

  @Output() selectedCountryEmitter: EventEmitter<Country> = new EventEmitter<Country>();

  ngOnInit() {
    this.countriesService.getCountries().subscribe(data => {
      this.countryList = data;
      this.filteredCountries = data;
      this.selectCountry(this.countryList[0]);
    });
  }

  selectCountry(selectedCountry: Country) {
    this.selectedCountry = selectedCountry;
    this.selectedCountryEmitter.emit(this.selectedCountry);
  }

}
