import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../services/country/country.model';
import { FeatureType } from '../../../common/services/country-config/country-config.model';
import { CountryConfigService } from '../../../common/services/country-config/country-config.service';
import {CountryV1Service} from "../../services/country/v1/country.v1.service";

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent implements OnChanges {
  @Input('countryCode') countryCode: string;

  country: Country;
  version: number;

  constructor(private countryService: CountryV1Service,
              private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.countryCode && changes.countryCode.currentValue) {
      this.country = this.countryService.getCountry(this.countryCode);
      this.version = this.countryConfigService.getFeatureVersion(FeatureType.COUNTRY_HEADER, this.countryCode);
    }
  }
}
