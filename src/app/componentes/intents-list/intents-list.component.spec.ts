import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentsListComponent } from './intents-list.component';

describe('IntentsListComponent', () => {
  let component: IntentsListComponent;
  let fixture: ComponentFixture<IntentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
