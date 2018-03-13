import { TestBed } from '@angular/core/testing';
import { FeatureVersionDirective } from './feature-version.directive';

describe('AppFeatureVersionDirective', () => {
  let directive;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureVersionDirective ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    directive = TestBed.get(FeatureVersionDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
