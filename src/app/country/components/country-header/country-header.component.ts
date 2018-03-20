import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../services/country.model';
import { FeatureType } from '../../../shared/services/country-config/country-config.model';
import { CountryConfigService } from '../../../shared/services/country-config/country-config.service';

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent implements OnChanges {
  @Input('country') country: Country;

  version: number;

  constructor(private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.country) {
      const countryCode = changes.country.currentValue.code;
      this.version = this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_HEADER, countryCode);
    }
  }
}
