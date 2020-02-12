import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclassifiedSentencesComponent } from './unclassified-sentences.component';

describe('UnclassifiedSentencesComponent', () => {
  let component: UnclassifiedSentencesComponent;
  let fixture: ComponentFixture<UnclassifiedSentencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnclassifiedSentencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnclassifiedSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
