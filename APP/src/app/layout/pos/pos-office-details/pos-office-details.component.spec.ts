import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosOfficeDetailsComponent } from './pos-office-details.component';

describe('PosOfficeDetailsComponent', () => {
  let component: PosOfficeDetailsComponent;
  let fixture: ComponentFixture<PosOfficeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosOfficeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosOfficeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
