import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowUpComponent } from './profile-follow-up.component';

describe('ProfileFollowUpComponent', () => {
  let component: ProfileFollowUpComponent;
  let fixture: ComponentFixture<ProfileFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
