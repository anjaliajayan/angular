import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSalesManagementComponent } from './point-sales-management.component';

describe('PointSalesManagementComponent', () => {
  let component: PointSalesManagementComponent;
  let fixture: ComponentFixture<PointSalesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSalesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSalesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
