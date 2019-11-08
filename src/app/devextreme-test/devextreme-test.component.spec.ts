import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevextremeTestComponent } from './devextreme-test.component';

describe('DevextremeTestComponent', () => {
  let component: DevextremeTestComponent;
  let fixture: ComponentFixture<DevextremeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevextremeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevextremeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
