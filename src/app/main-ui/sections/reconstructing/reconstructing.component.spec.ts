import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructingComponent } from './reconstructing.component';

describe('ReconstructingComponent', () => {
  let component: ReconstructingComponent;
  let fixture: ComponentFixture<ReconstructingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconstructingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
