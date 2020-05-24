import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosBasicEditComponent } from './pos-basic-edit.component';

describe('PosBasicEditComponent', () => {
  let component: PosBasicEditComponent;
  let fixture: ComponentFixture<PosBasicEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosBasicEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosBasicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
