import { TestBed, inject } from '@angular/core/testing';

import { CountryConfigService } from './country-config.service';

describe('CountryConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryConfigService]
    });
  });

  it('should be created', inject([CountryConfigService], (service: CountryConfigService) => {
    expect(service).toBeTruthy();
  }));
});
