import { Injectable } from '@angular/core';
import { Country, DEFAULT_COUNTRY_LIST } from './country.model';

@Injectable()
export class CountryService {
  private countries: Array<Country> = DEFAULT_COUNTRY_LIST;

  getCountryList(): Array<Country> {
    return this.countries;
  }

  getCountry(code: string): Country {
    let foundCountry;
    this.countries.forEach( (country) => {
      if (country.code === code) {
        foundCountry = country;
      }
    });
    return foundCountry;
  }
}

