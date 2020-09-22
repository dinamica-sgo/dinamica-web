import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkApprovedComponent } from './link-approved.component';

describe('LinkApprovedComponent', () => {
  let component: LinkApprovedComponent;
  let fixture: ComponentFixture<LinkApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
