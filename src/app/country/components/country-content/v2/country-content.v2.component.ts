import { Component, Input } from '@angular/core';
import { Country } from '../../../../common/services/country/country.model';

@Component({
  selector: 'app-country-content-v2',
  templateUrl: './country-content.v2.component.html',
  styleUrls: ['./country-content.v2.component.scss']
})
export class CountryContentV2Component {
  @Input('country') country: Country;
}
