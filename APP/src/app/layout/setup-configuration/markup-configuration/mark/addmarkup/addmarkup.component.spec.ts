import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkupComponent } from './addmarkup.component';

describe('PosMarkupComponent', () => {
  let component: AddMarkupComponent;
  let fixture: ComponentFixture<AddMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
