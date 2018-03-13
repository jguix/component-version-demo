import { ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { CountryConfigService } from '../../services/country-config/country-config.service';
import { Country } from '../../services/country/country.model';
import { DynamicComponentService } from '../../services/dynamic-component/dynamic-component.service';
import { DynamicComponent } from '../../services/dynamic-component/dynamic-component.model';
import { CountryComponent } from '../../../country/components/country.component';

@Directive({
  selector: '[appFeatureVersion]'
})
export class FeatureVersionDirective implements OnChanges {
  private _featureName: string;
  private _country: Country;
  // private _hasView: boolean;

  @Input() set appFeatureVersion(featureName: string) {
    this._featureName = featureName;
  }

  @Input()
  set appFeatureVersionCountry(value: Country) {
    this._country = value;
  }

  constructor(public viewContainerRef: ViewContainerRef,
              private countryConfigService: CountryConfigService,
              private dynamicComponentService: DynamicComponentService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.applyChanges();
    }
  }

  private applyChanges(): void {
    const featureEnabled = this.countryConfigService.isFeatureEnabled(this._featureName, this._country);
    const featureVersion = this.countryConfigService.getFeatureVersion(this._featureName, this._country) || 0;
    const dynamicComponent = this.dynamicComponentService.getComponent(this._featureName, featureVersion);
    this.clearView();
    if (featureEnabled && dynamicComponent) {
      this.embedComponent(dynamicComponent);
    }
  }

  private clearView(): void {
    this.viewContainerRef.clear();
  }

  private embedComponent(dynamicComponent: DynamicComponent): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(dynamicComponent.component);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (<CountryComponent>componentRef.instance).country = this._country;
  }
}
