import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { CountryConfigService } from '../../services/country-config/country-config.service';
import { Country } from '../../../country/services/country.model';

@Directive({
  selector: '[appFeatureElse]'
})
export class FeatureElseDirective implements OnChanges {
  private _featureName: string;
  private _country: Country;
  private _minVersion = 0;
  private _hasView: boolean;

  @Input() set appFeatureElse(featureName: string) {
    this._featureName = featureName;
  }

  @Input()
  set appFeatureElseCountry(value: Country) {
    this._country = value;
  }

  @Input()
  set appFeatureElseVersion(value: number) {
    this._minVersion = value;
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.applyChanges();
    }
  }

  private applyChanges(): void {
    const featureEnabled = this.countryConfigService.isFeatureEnabled(this._featureName, this._country);
    const featureVersion = this.countryConfigService.getFeatureVersion(this._featureName, this._country) || 0;
    if (featureEnabled && featureVersion >= this._minVersion) {
      this.embedTemplate(false);
    } else {
      this.embedTemplate(true);
    }
  }

  private embedTemplate(enabled): void {
    if (enabled && !this._hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this._hasView = true;
    } else if (!enabled && this._hasView) {
      this.viewContainer.clear();
      this._hasView = false;
    }
  }
}
