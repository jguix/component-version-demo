import { Injectable } from '@angular/core';
import { CountryConfigDictionary, DEFAULT_COUNTRY_CONFIG, FeatureVersionDictionary } from './country-config.model';
import { Country } from '../country/country.model';

@Injectable()
export class CountryConfigService {
  private config: CountryConfigDictionary = DEFAULT_COUNTRY_CONFIG;

  getCountryFeatures(country: Country): FeatureVersionDictionary {
    return this.config[country.code].features;
  }

  isFeatureEnabled(feature: string, country: Country): boolean {
    const countryFeatures = this.getCountryFeatures(country);
    return countryFeatures.hasOwnProperty(feature);
  }

  getFeatureVersion(feature: string, country: Country): number {
    const countryFeatures = this.getCountryFeatures(country);
    return countryFeatures[feature];
  }
}
