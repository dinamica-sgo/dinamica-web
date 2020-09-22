import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapiCashComponent } from './rapi-cash.component';

describe('RapiCashComponent', () => {
  let component: RapiCashComponent;
  let fixture: ComponentFixture<RapiCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapiCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapiCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
