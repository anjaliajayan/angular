import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupComponent } from './addgroup.component';

describe('PosGroupComponent', () => {
  let component: AddGroupComponent;
  let fixture: ComponentFixture<AddGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
