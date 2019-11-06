import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import * as countryJsonObject from "./backup-data/countryJsonObject.json";
import {of} from "rxjs";
import {Country} from "../dtos/country";


@Injectable()
export class CountriesService {

  corsProxy = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  getCountries(): any {
    return this.http.get(this.corsProxy + `https://countryapi.gear.host/v1/Country/getCountries`).pipe(
      catchError(response => {
        return of(countryJsonObject.Response);
      }),
      map((response: any) => {
          return response.Response.map(country => new Country(country))
        }
      )
    )
  }
}
