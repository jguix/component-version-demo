import { Type } from '@angular/core';
import { CountryContentV1Component } from '../../../country/components/country-content/v1/country-content.v1.component';
import { CountryContentV2Component } from '../../../country/components/country-content/v2/country-content.v2.component';

export class DynamicComponent {
  data: any;
}

export interface DynamicComponentDictionary {
  [key: string]: {
    [key: number]: Type<any>;
  };
}

export const DEFAULT_DYNAMIC_COMPONENT_DICTIONARY: DynamicComponentDictionary = {
  'COUNTRY_CONTENT': {
    1: CountryContentV1Component,
    2: CountryContentV2Component
  }
};
