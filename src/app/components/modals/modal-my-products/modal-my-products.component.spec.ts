import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMyProductsComponent } from './modal-my-products.component';

describe('ModalMyProductsComponent', () => {
  let component: ModalMyProductsComponent;
  let fixture: ComponentFixture<ModalMyProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMyProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
