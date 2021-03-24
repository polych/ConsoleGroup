import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExamplesComponent } from './change-examples.component';

describe('ChangeExamplesComponent', () => {
  let component: ChangeExamplesComponent;
  let fixture: ComponentFixture<ChangeExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
