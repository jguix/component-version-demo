import { Injectable } from '@angular/core';
import { DEFAULT_DYNAMIC_COMPONENT_LIST, DynamicComponent } from "./dynamic-component.model";

@Injectable()
export class DynamicComponentService {
  private componentList: Array<DynamicComponent> = DEFAULT_DYNAMIC_COMPONENT_LIST;

  constructor() { }

  getComponent(featureName: string, version: number) {
    let selectedComponent: DynamicComponent;
    this.componentList.forEach(dynamicComponent => {
      if (dynamicComponent.featureName === featureName &&
        dynamicComponent.version === version) {
        selectedComponent = dynamicComponent;
      }
    });
    return selectedComponent;
  }
}
