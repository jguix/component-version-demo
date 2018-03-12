import { Component } from '@angular/core';
import {Country} from './country-selector/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCountry: Country;

  onCountrySelected(country: Country) {
    this.selectedCountry = country;
  }
}
