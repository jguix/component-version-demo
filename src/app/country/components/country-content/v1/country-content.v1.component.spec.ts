import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryContentV1Component } from './country-content.v1.component';

describe('CountryContentV1Component', () => {
  let component: CountryContentV1Component;
  let fixture: ComponentFixture<CountryContentV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryContentV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryContentV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
