import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryContentV2Component } from './country-content.v2.component';

describe('CountryContentV2Component', () => {
  let component: CountryContentV2Component;
  let fixture: ComponentFixture<CountryContentV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryContentV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryContentV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
