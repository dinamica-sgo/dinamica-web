import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneApproveComponent } from './phone-approve.component';

describe('PhoneApproveComponent', () => {
  let component: PhoneApproveComponent;
  let fixture: ComponentFixture<PhoneApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
