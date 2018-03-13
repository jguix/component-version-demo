import { Injectable } from '@angular/core';
import { DEFAULT_DYNAMIC_COMPONENT_DICTIONARY, DynamicComponentDictionary } from './dynamic-component.model';

@Injectable()
export class DynamicComponentService {
  private componentDictionary: DynamicComponentDictionary = DEFAULT_DYNAMIC_COMPONENT_DICTIONARY;

  getComponent(featureName: string, version: number) {
    const selectedComponent = this.componentDictionary[featureName] ?
       this.componentDictionary[featureName][version] : undefined;
    return selectedComponent;
  }
}
