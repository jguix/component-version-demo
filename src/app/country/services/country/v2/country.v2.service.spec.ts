import { TestBed, inject } from '@angular/core/testing';
import { CountryV2Service } from './country.v2.service';

describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryV2Service]
    });
  });

  it('should be created', inject([CountryV2Service], (service: CountryV2Service) => {
    expect(service).toBeTruthy();
  }));
});
