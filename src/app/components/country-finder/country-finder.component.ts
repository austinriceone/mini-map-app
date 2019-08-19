import { Component, OnInit } from '@angular/core';
import {Country} from '../../dtos/country';

@Component({
  selector: 'app-country-finder',
  templateUrl: './country-finder.component.html',
  styleUrls: ['./country-finder.component.scss']
})
export class CountryFinderComponent implements OnInit {

  selectedCountry: Country;
  constructor() { }

  ngOnInit() {
  }

}
