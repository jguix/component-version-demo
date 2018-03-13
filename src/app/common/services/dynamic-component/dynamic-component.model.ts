import { Type } from '@angular/core';
import {CountryContentV1Component} from '../../../country/components/country-content/v1/country-content.v1.component';
import {CountryContentV2Component} from '../../../country/components/country-content/v2/country-content.v2.component';
import {FEATURES} from '../country-config/country-config.model';

export class DynamicComponent {
  constructor(public featureName: string,
              public version: number,
              public component: Type<any>) {}
}

export const DEFAULT_DYNAMIC_COMPONENT_LIST: Array<DynamicComponent> = [
  new DynamicComponent(FEATURES.COUNTRY_CONTENT, 1, CountryContentV1Component),
  new DynamicComponent(FEATURES.COUNTRY_CONTENT, 2, CountryContentV2Component)
];
