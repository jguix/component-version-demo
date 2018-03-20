import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CountryConfigService } from '../../services/country-config/country-config.service';

@Directive({
  selector: '[appFeatureIf]'
})
export class FeatureIfDirective implements OnChanges {
  private _featureName: string;
  private _countryCode: string;
  private _minVersion = 0;
  private _hasView: boolean;

  @Input() set appFeatureIf(featureName: string) {
    this._featureName = featureName;
  }

  @Input()
  set appFeatureIfCountryCode(value: string) {
    this._countryCode = value;
  }

  @Input()
  set appFeatureIfVersion(value: number) {
    this._minVersion = value;
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private countryConfigService: CountryConfigService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.applyChanges();
    }
  }

  private applyChanges(): void {
    const featureEnabled = this.countryConfigService.isFeatureEnabled(this._featureName, this._countryCode);
    const featureVersion = this.countryConfigService.getFeatureVersion(this._featureName, this._countryCode) || 0;
    if (featureEnabled && featureVersion >= this._minVersion) {
      this.embedTemplate(true);
    } else {
      this.embedTemplate(false);
    }
  }

  private embedTemplate(enabled): void {
    if (enabled && !this._hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this._hasView = true;
    } else if (!enabled && this._hasView) {
      this.viewContainerRef.clear();
      this._hasView = false;
    }
  }
}
