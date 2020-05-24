import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSavedPackagesComponent } from './list-saved-packages.component';

describe('ListSavedPackagesComponent', () => {
  let component: ListSavedPackagesComponent;
  let fixture: ComponentFixture<ListSavedPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSavedPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSavedPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
