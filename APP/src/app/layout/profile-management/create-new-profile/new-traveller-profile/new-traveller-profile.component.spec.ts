import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravellerProfileComponent } from './new-traveller-profile.component';

describe('NewTravellerProfileComponent', () => {
  let component: NewTravellerProfileComponent;
  let fixture: ComponentFixture<NewTravellerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTravellerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravellerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
