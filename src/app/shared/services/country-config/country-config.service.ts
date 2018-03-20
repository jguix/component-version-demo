import { Injectable } from '@angular/core';
import { CountryConfigDictionary, DEFAULT_COUNTRY_CONFIG, FeatureVersionDictionary } from './country-config.model';

@Injectable()
export class CountryConfigService {
  private config: CountryConfigDictionary = DEFAULT_COUNTRY_CONFIG;

  getCountryFeatures(countryCode: string): FeatureVersionDictionary {
    return this.config[countryCode].features;
  }

  isFeatureEnabled(feature: string, countryCode: string): boolean {
    const countryFeatures = this.getCountryFeatures(countryCode);
    return countryFeatures.hasOwnProperty(feature);
  }

  getFeatureVersion(feature: string, countryCode: string): number {
    const countryFeatures = this.getCountryFeatures(countryCode);
    return countryFeatures[feature];
  }
}
