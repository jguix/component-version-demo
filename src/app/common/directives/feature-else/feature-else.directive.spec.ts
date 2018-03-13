import { TestBed } from '@angular/core/testing';
import { FeatureElseDirective } from './feature-else.directive';

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
