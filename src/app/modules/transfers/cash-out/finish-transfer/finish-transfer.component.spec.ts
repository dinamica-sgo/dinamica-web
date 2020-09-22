import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishTransferComponent } from './finish-transfer.component';

describe('FinishTransferComponent', () => {
  let component: FinishTransferComponent;
  let fixture: ComponentFixture<FinishTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
