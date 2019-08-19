import { Pipe, PipeTransform } from '@angular/core';
import {Country} from "../dtos/country";

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(countriesToFilter: Array<Country>, args?: any): any {
    return countriesToFilter.filter(country => Object.keys(country).some(key => country[key] ? country[key].toString().toLowerCase().includes(args.toString().toLowerCase()) : false));
  }

}
