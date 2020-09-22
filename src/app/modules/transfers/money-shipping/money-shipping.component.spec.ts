import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyShippingComponent } from './money-shipping.component';

describe('MoneyShippingComponent', () => {
  let component: MoneyShippingComponent;
  let fixture: ComponentFixture<MoneyShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
