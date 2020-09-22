import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountOutComponent } from './bank-account-out.component';

describe('BankAccountOutComponent', () => {
  let component: BankAccountOutComponent;
  let fixture: ComponentFixture<BankAccountOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
