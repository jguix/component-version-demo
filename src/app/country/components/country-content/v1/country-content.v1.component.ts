import { Component } from '@angular/core';
import { DynamicComponent } from '../../../../shared/services/dynamic-component/dynamic-component.model';
import { Country } from '../../../services/country.model';

@Component({
  selector: 'app-country-content-v1',
  templateUrl: './country-content.v1.component.html',
  styleUrls: ['./country-content.v1.component.scss']
})
export class CountryContentV1Component implements DynamicComponent {
  data: {country: Country};
}
