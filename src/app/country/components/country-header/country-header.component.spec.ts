import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryHeaderComponent } from './country-header.component';

describe('CountryHeaderComponent', () => {
  let component: CountryHeaderComponent;
  let fixture: ComponentFixture<CountryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
