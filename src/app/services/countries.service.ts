import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {Country} from "../dtos/country";


@Injectable()
export class CountriesService {

  corsProxy = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getCountries(): any {
    return this.http.get(this.corsProxy + `https://countryapi.gear.host/v1/Country/getCountries`).pipe(
      map((resp: any) => {return resp.Response.map(countryData => new Country(countryData))}),
      catchError(error => error)
    )
  }
}
