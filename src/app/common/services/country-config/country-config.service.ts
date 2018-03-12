import { Injectable } from '@angular/core';
import { CountryConfig, DEFAULT_COUNTRY_CONFIG, FeatureVersion } from './country-config.model';
import { Country } from '../country/country.model';

@Injectable()
export class CountryConfigService {
  private config: CountryConfig = DEFAULT_COUNTRY_CONFIG;

  getCountryFeatures(country: Country): FeatureVersion {
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
