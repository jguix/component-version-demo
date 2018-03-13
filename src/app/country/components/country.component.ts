import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryConfigService } from '../../common/services/country-config/country-config.service';
import { FeatureType } from '../../common/services/country-config/country-config.model';
import { CountryService } from '../services/country.service';
import { CountryOption } from '../../country-selector/services/country-option.model';
import { Country } from '../services/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
  @Input('countryCode') countryCode: string;

  public country: Country;

  constructor(private countryService: CountryService,
              private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.countryCode) {
      const countryCode = changes.countryCode.currentValue;
      if (countryCode) {
        this.country = this.countryService.getCountry(countryCode);
        const headerVersion: string = this.countryConfigService.isFeatureEnabled(FeatureType.COUNTRY_HEADER, this.country) ?
          'v' + this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_HEADER, this.country).toString() : 'UNAVAILABLE';
        const contentVersion: string = this.countryConfigService.isFeatureEnabled(FeatureType.COUNTRY_CONTENT, this.country) ?
          'v' + this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_CONTENT, this.country).toString() : 'UNAVAILABLE';
        console.log('Selected country: ', this.country.name);
        console.log('Header: ', headerVersion);
        console.log('Content: ', contentVersion);
      }
    }
  }
}
