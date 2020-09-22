import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeApproveComponent } from './code-approve.component';

describe('CodeApproveComponent', () => {
  let component: CodeApproveComponent;
  let fixture: ComponentFixture<CodeApproveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeApproveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
