import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashInAmountComponent } from './cash-in-amount.component';

describe('CashInAmountComponent', () => {
  let component: CashInAmountComponent;
  let fixture: ComponentFixture<CashInAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashInAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashInAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
