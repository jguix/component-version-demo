import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryContentV1Component } from './country-content.component';

describe('CountryContentComponent', () => {
  let component: CountryContentV1Component;
  let fixture: ComponentFixture<CountryContentV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryContentV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryContentV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
