import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
import { CountryConfigService } from '../../services/country-config/country-config.service';
import { DynamicComponentService } from '../../services/dynamic-component/dynamic-component.service';
import { DynamicComponent } from '../../services/dynamic-component/dynamic-component.model';

@Directive({
  selector: '[appFeatureVersion]'
})
export class FeatureVersionDirective implements OnChanges {
  private _featureName: string;
  private _countryCode: string;
  private _data: any;
  private componentRef: ComponentRef<DynamicComponent>;

  @Input() set appFeatureVersion(featureName: string) {
    this._featureName = featureName;
  }

  @Input()
  set appFeatureVersionCountryCode(value: string) {
    this._countryCode = value;
  }

  @Input()
  set appFeatureVersionData(value: any) {
    this._data = value;
  }

  constructor(private viewContainerRef: ViewContainerRef,
              private countryConfigService: CountryConfigService,
              private dynamicComponentService: DynamicComponentService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.applyChanges();
    }
  }

  private applyChanges(): void {
    const featureEnabled = this.countryConfigService.isFeatureEnabled(this._featureName, this._countryCode);
    const featureVersion = this.countryConfigService.getFeatureVersion(this._featureName, this._countryCode) || 0;
    const dynamicComponent = this.dynamicComponentService.getComponent(this._featureName, featureVersion);

    this.clearViewContainer();
    if (featureEnabled && dynamicComponent) {
      this.embedComponent(dynamicComponent);
      this.injectComponentData();
    }
  }

  private clearViewContainer(): void {
    this.viewContainerRef.clear();
  }

  private embedComponent(component: Type<DynamicComponent>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
  }

  private injectComponentData(): void {
    this.componentRef.instance.data = this._data;
  }
}
