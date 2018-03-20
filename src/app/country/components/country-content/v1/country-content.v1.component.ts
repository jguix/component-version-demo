import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DynamicComponent } from '../../../../shared/services/dynamic-component/dynamic-component.model';
import { Country } from '../../../services/country/country.model';
import { CountryV1Service } from '../../../services/country/v1/country.v1.service';

@Component({
  selector: 'app-country-content-v1',
  templateUrl: './country-content.v1.component.html',
  styleUrls: ['./country-content.v1.component.scss']
})
export class CountryContentV1Component implements DynamicComponent, OnInit {
  data: {countryCode: string};

  country: Country;

  constructor(private countryService: CountryV1Service) {
  }

  ngOnInit() {
    this.country = this.countryService.getCountry(this.data.countryCode);
    console.log('country', this.country);
  }
}
