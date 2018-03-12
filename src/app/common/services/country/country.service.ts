import { Injectable } from '@angular/core';
import { Country, DEFAULT_COUNTRY_LIST } from './country.model';

@Injectable()
export class CountryService {
  private countries: Array<Country> = DEFAULT_COUNTRY_LIST;

  getCountryList(): Array<Country> {
    return this.countries;
  }

}

