import { TestBed, inject } from '@angular/core/testing';
import { CountryV1Service } from './country.v1.service';

describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryV1Service]
    });
  });

  it('should be created', inject([CountryV1Service], (service: CountryV1Service) => {
    expect(service).toBeTruthy();
  }));
});
