import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosEditButtonComponent } from './pos-edit-button.component';

describe('PosEditButtonComponent', () => {
  let component: PosEditButtonComponent;
  let fixture: ComponentFixture<PosEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
