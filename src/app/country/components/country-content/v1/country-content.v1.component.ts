import { Component, Input } from '@angular/core';
import { Country } from '../../../../common/services/country/country.model';

@Component({
  selector: 'app-country-content-v1',
  templateUrl: './country-content.v1.component.html',
  styleUrls: ['./country-content.v1.component.scss']
})
export class CountryContentV1Component {
  @Input('country') country: Country;
}
