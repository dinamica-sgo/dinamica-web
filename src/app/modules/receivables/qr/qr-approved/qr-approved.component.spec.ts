import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrApprovedComponent } from './qr-approved.component';

describe('QrApprovedComponent', () => {
  let component: QrApprovedComponent;
  let fixture: ComponentFixture<QrApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
