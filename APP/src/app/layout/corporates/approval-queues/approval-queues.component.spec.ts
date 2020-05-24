import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalQueuesComponent } from './approval-queues.component';

describe('ApprovalQueuesComponent', () => {
  let component: ApprovalQueuesComponent;
  let fixture: ComponentFixture<ApprovalQueuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalQueuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
