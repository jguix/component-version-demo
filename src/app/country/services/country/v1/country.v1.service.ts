import { Injectable } from '@angular/core';
import { CountryInterface } from '../country.interface';
import { Country, DEFAULT_COUNTRY_LIST_V1 } from '../country.model';

@Injectable()
export class CountryV1Service implements CountryInterface {
  private countries: Array<Country> = DEFAULT_COUNTRY_LIST_V1;

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

