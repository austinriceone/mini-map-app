import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../dtos/country';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }

  @Input() displayedCountry: Country;

  ngOnInit() {

  }

}
