import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransfersComponent } from './search-transfers.component';

describe('SearchTransfersComponent', () => {
  let component: SearchTransfersComponent;
  let fixture: ComponentFixture<SearchTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
