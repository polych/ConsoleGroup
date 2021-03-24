import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePortfolioComponent } from './change-portfolio.component';

describe('ChangePortfolioComponent', () => {
  let component: ChangePortfolioComponent;
  let fixture: ComponentFixture<ChangePortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
