import {Pipe, PipeTransform} from '@angular/core';
import {Country} from '../dtos/country';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(countriesToFilter: Array<Country>, term?: any): any {
    return countriesToFilter.filter(country => {
      const countryKeys = Object.keys(country);
      countryKeys.some(key => {
        const value = country[key].toString().trim().toLowerCase();
        return value ? value.includes(term.toString().trim().toLowerCase()) : false;
      });
    });
  }

}
