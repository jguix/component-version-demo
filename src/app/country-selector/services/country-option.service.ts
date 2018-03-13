import { Injectable } from '@angular/core';
import { CountryOption, DEFAULT_COUNTRY_OPTION_LIST } from './country-option.model';

@Injectable()
export class CountryOptionService {
  private countryOptions: Array<CountryOption> = DEFAULT_COUNTRY_OPTION_LIST;

  getCountryOptionList(): Array<CountryOption> {
    return this.countryOptions;
  }

}

