import { Component, Input } from '@angular/core';
import { Country } from '../../../common/services/country/country.model';

@Component({
  selector: 'app-country-header',
  templateUrl: './country-header.component.html',
  styleUrls: ['./country-header.component.scss']
})
export class CountryHeaderComponent {
  @Input('country') country: Country;
}
