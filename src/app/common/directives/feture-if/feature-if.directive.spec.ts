import { TestBed } from '@angular/core/testing';
import { FeatureIfDirective } from './feature-if.directive';

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
