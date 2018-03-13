import { TestBed, inject } from '@angular/core/testing';
import { CountryOptionService } from './country-option.service';

describe('CountryOptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryOptionService]
    });
  });

  it('should be created', inject([CountryOptionService], (service: CountryOptionService) => {
    expect(service).toBeTruthy();
  }));
});
