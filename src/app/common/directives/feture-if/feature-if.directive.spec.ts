import { FeatureIfDirective } from './feature-if.directive';
import { TestBed } from '@angular/core/testing';

describe('AppFeatureIfDirective', () => {
  let directive;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureIfDirective ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    directive = TestBed.get(FeatureIfDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
