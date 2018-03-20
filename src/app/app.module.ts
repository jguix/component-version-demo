import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './country-selector/components/country-selector.component';
import { CountryComponent } from './country/components/country.component';
import { CountryHeaderComponent } from './country/components/country-header/country-header.component';
import { CountryContentV1Component } from './country/components/country-content/v1/country-content.v1.component';
import { CountryContentV2Component } from './country/components/country-content/v2/country-content.v2.component';
import { CountryOptionService } from './country-selector/services/country-option.service';
import { CountryV1Service } from './country/services/country/v1/country.v1.service';
import { CountryV2Service } from './country/services/country/v2/country.v2.service';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    CountryComponent,
    CountryHeaderComponent,
    CountryContentV1Component,
    CountryContentV2Component
  ],
  entryComponents: [
    CountryContentV1Component,
    CountryContentV2Component
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    CountryOptionService,
    CountryV1Service,
    CountryV2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
