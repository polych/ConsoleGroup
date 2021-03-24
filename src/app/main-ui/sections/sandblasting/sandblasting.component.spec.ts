import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandblastingComponent } from './sandblasting.component';

describe('SandblastingComponent', () => {
  let component: SandblastingComponent;
  let fixture: ComponentFixture<SandblastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandblastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandblastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
