import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryConfigService } from '../../common/services/country-config/country-config.service';
import { FeatureType } from '../../common/services/country-config/country-config.model';
import { CountryV1Service } from '../services/country/v1/country.v1.service';
import { CountryOption } from '../../country-selector/services/country-option.model';
import { Country } from '../services/country/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnChanges {
  @Input('countryCode') countryCode: string;

  public country: Country;

  constructor(private countryService: CountryV1Service,
              private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.countryCode && changes.countryCode.currentValue) {
      this.country = this.countryService.getCountry(this.countryCode);
      const headerVersion: string = this.countryConfigService.isFeatureEnabled(FeatureType.COUNTRY_HEADER, this.countryCode) ?
        'v' + this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_HEADER, this.countryCode).toString() : 'UNAVAILABLE';
      const contentVersion: string = this.countryConfigService.isFeatureEnabled(FeatureType.COUNTRY_CONTENT, this.countryCode) ?
        'v' + this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_CONTENT, this.countryCode).toString() : 'UNAVAILABLE';
      console.log('Selected country: ', this.country.name);
      console.log('Header: ', headerVersion);
      console.log('Content: ', contentVersion);
    }
  }
}
