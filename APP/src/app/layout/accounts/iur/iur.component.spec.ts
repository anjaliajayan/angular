import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IurComponent } from './iur.component';

describe('IurComponent', () => {
  let component: IurComponent;
  let fixture: ComponentFixture<IurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
