import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
  `]
})

export class ModalComponent implements OnInit {




  constructor( public dataApi : DataApiService,
    public activeModal: NgbActiveModal, public dummyService : DummyService,
    private modalService: NgbModal   ) { }

  @ViewChild('btnClose') btnClose : ElementRef;

  public products =[];
  public product = '';


  ngOnInit(): void {
    this.dataApi.getAllProducts().subscribe(products => {
     /*  console.log('Producto', products); */
      this.products = products;
    })
  }


  onSaveProduct( productForm: NgForm ):void{
    if(productForm.value.id == null) {
      //nuevo
      this.dataApi.addProduct(productForm.value);
    }else {
      this.dataApi.updateProduct(productForm.value);
    }
  productForm.resetForm();
  this.btnClose.nativeElement.click();
  }

  opens(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
