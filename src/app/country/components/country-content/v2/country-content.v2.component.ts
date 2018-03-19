import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DynamicComponent } from '../../../../common/services/dynamic-component/dynamic-component.model';
import { Country } from '../../../services/country/country.model';
import { CountryV2Service } from '../../../services/country/v2/country.v2.service';

@Component({
  selector: 'app-country-content-v2',
  templateUrl: './country-content.v2.component.html',
  styleUrls: ['./country-content.v2.component.scss']
})
export class CountryContentV2Component implements DynamicComponent, OnInit {
  data: {countryCode: string};

  country: Country;

  constructor(private countryService: CountryV2Service) {
  }

  ngOnInit() {
    this.country = this.countryService.getCountry(this.data.countryCode);
    console.log('country', this.country);
  }

}
