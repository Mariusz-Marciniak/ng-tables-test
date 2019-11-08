import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDatatableTestComponent } from './ngx-datatable-test.component';

describe('NgxDatatableTestComponent', () => {
  let component: NgxDatatableTestComponent;
  let fixture: ComponentFixture<NgxDatatableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDatatableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDatatableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
