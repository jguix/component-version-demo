import { Injectable } from '@angular/core';
import { Country } from './country.model';

export interface CountryInterface {
  getCountryList(): Array<Country>;

  getCountry(code: string): Country;
}
