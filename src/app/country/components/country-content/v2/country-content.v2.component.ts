import { Component, Input } from '@angular/core';
import { CountryContentComponent } from '../country-content.component';
import { Country } from '../../../../common/services/country/country.model';

@Component({
  selector: 'app-country-content-v2',
  templateUrl: './country-content.v2.component.html',
  styleUrls: ['./country-content.v2.component.scss']
})
export class CountryContentV2Component implements CountryContentComponent {
  @Input('country') country: Country;
}
