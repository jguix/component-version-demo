import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from '../../common/services/country/country.service';
import { Country } from '../../common/services/country/country.model';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  @Output('countrySelected') countrySelected = new EventEmitter<Country>();
  selectedCountry: Country;
  countries: Array<Country>;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries = this.countryService.getCountryList();
  }

  onCountryChange() {
    this.countrySelected.emit(this.selectedCountry);
  }
}
