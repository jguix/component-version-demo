import { Component } from '@angular/core';
import { DynamicComponent } from '../../../../common/services/dynamic-component/dynamic-component.model';
import { Country } from '../../../../common/services/country/country.model';

@Component({
  selector: 'app-country-content-v2',
  templateUrl: './country-content.v2.component.html',
  styleUrls: ['./country-content.v2.component.scss']
})
export class CountryContentV2Component implements DynamicComponent {
  data: {country: Country};
}
