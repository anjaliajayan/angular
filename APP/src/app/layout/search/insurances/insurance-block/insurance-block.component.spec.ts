import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBlockComponent } from './insurance-block.component';

describe('InsuranceBlockComponent', () => {
  let component: InsuranceBlockComponent;
  let fixture: ComponentFixture<InsuranceBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
