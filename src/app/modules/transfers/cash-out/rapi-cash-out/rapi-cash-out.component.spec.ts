import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiCashOutComponent } from './rapi-cash-out.component';

describe('RapiCashOutComponent', () => {
  let component: RapiCashOutComponent;
  let fixture: ComponentFixture<RapiCashOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapiCashOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapiCashOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
