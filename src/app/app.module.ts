import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/components/country-selector.component';
import { CountryComponent } from './country/components/country.component';
import { CountryHeaderComponent } from './country/components/country-header/country-header.component';
import { CountryContentV1Component } from './country/components/country-content/v1/country-content.v1.component';
import { CountryContentV2Component } from './country/components/country-content/v2/country-content.v2.component';
import { CountryConfigService } from './common/services/country-config/country-config.service';
import { CountryService } from './common/services/country/country.service';
import { FeatureIfDirective } from './common/directives/feture-if/feature-if.directive';
import { FeatureElseDirective } from './common/directives/feature-else/feature-else.directive';
import { FeatureVersionDirective } from './common/directives/feature-version/feature-version.directive';
import { DynamicComponentService } from './common/services/dynamic-component/dynamic-component.service';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    CountryComponent,
    CountryHeaderComponent,
    CountryContentV1Component,
    CountryContentV2Component,
    FeatureIfDirective,
    FeatureElseDirective,
    FeatureVersionDirective
  ],
  entryComponents: [
    CountryContentV1Component,
    CountryContentV2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CountryConfigService,
    CountryService,
    DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
