import { FeatureElseDirective } from './feature-else.directive';
import { TestBed } from '@angular/core/testing';

describe('AppFeatureIfDirective', () => {
  let directive;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureElseDirective ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    directive = TestBed.get(FeatureElseDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
