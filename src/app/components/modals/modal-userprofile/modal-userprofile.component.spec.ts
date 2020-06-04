import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserprofileComponent } from './modal-userprofile.component';

describe('ModalUserprofileComponent', () => {
  let component: ModalUserprofileComponent;
  let fixture: ComponentFixture<ModalUserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
