import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from '../../dtos/country';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {CountryFilterPipe} from '../../pipes/country-filter.pipe';

@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.css']
})
export class CountryFilterComponent implements OnInit {

  filterArgumentChange$: Subject<boolean> = new Subject<boolean>();
  filterArgument: string;

  @Input() countries: Array<Country>;
  filteredCountries: Array<Country>;
  @Output() filteredCountriesEmitter: EventEmitter<Array<Country>> = new EventEmitter<Array<Country>>();

  constructor(private countryFilterPipe: CountryFilterPipe) { }

  ngOnInit() {
    this.filterArgumentChange$.pipe(debounceTime(500)).subscribe(val => {
      this.filteredCountries = this.countryFilterPipe.transform(this.countries, this.filterArgument);
      this.filteredCountriesEmitter.emit(this.filteredCountries)
    })
  }
}
