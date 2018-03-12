import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryConfigService } from '../../common/services/country-config/country-config.service';
import { FEATURES } from '../../common/services/country-config/country-config.model';
import { Country } from '../../common/services/country/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
  @Input('country') country: Country;

  constructor(private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.country) {
      const country = changes.country.currentValue;
      if (country) {
        const headerVersion: string = this.countryConfigService.isFeatureEnabled(FEATURES.COUNTRY_HEADER, country) ?
          'v' + this.countryConfigService.getFeatureVersion(FEATURES.COUNTRY_HEADER, country).toString() : 'UNAVAILABLE';
        const contentVersion: string = this.countryConfigService.isFeatureEnabled(FEATURES.COUNTRY_CONTENT, country) ?
          'v' + this.countryConfigService.getFeatureVersion(FEATURES.COUNTRY_CONTENT, country).toString() : 'UNAVAILABLE';
        console.log('Selected country: ', country.name);
        console.log('Header: ', headerVersion);
        console.log('Content: ', contentVersion);
      }
    }
  }
}
