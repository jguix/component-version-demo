import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryOptionService } from '../services/country-option.service';
import { CountryOption } from '../services/country-option.model';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {
  @Output('countryCodeSelected') countryCodeSelected = new EventEmitter<string>();
  selectedCountryOption: CountryOption;
  countryOptions: Array<CountryOption>;

  constructor(private countryOptionService: CountryOptionService) { }

  ngOnInit() {
    this.countryOptions = this.countryOptionService.getCountryOptionList();
  }

  onCountryChange() {
    this.countryCodeSelected.emit(this.selectedCountryOption.code);
  }
}
