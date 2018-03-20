import { Injectable, Type } from '@angular/core';
import { DEFAULT_DYNAMIC_COMPONENT_DICTIONARY, DynamicComponent, DynamicComponentDictionary } from './dynamic-component.model';

@Injectable()
export class DynamicComponentService {
  private componentDictionary: DynamicComponentDictionary = DEFAULT_DYNAMIC_COMPONENT_DICTIONARY;

  getComponent(featureName: string, version: number): Type<DynamicComponent> {
    const selectedComponent = this.componentDictionary[featureName] ?
       this.componentDictionary[featureName][version] : undefined;
    return selectedComponent;
  }
}
