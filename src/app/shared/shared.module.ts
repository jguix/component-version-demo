import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureIfDirective} from './directives/feture-if/feature-if.directive';
import { FeatureElseDirective } from './directives/feature-else/feature-else.directive';
import { FeatureVersionDirective } from './directives/feature-version/feature-version.directive';
import { CountryConfigService } from './services/country-config/country-config.service';
import { DynamicComponentService } from './services/dynamic-component/dynamic-component.service';

@NgModule({
  declarations: [
    FeatureIfDirective,
    FeatureElseDirective,
    FeatureVersionDirective,
  ],
  exports: [
    FeatureIfDirective,
    FeatureElseDirective,
    FeatureVersionDirective
  ],
  providers: [
    CountryConfigService,
    DynamicComponentService
  ]
})
export class SharedModule { }
