import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../interfaces/products';
import { DummyService } from '../../services/dummy.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modals/modal/modal.component';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor( public dataApi: DataApiService, 
                public dummyService : DummyService, 
                private modalService: NgbModal,
                public activeModal: NgbActiveModal) { }

  filterPost = '';
  dataProducts;

  public products : ProductInterface[];

  ngOnInit(): void {
    this.getListProduct();
    
  }

  getListProduct(){
    this.dataProducts = this.dummyService.consultaProducto();
    console.log('producto', this.dataProducts)
  }

  onDeleteProducts(i : string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
    this.dataProducts.splice(i, 1)
    }
  }

  onPreUpdateProduct(product: ProductInterface) {
    this.dataApi.selectedProduct = Object.assign({}, product);
  }

  opens(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  

}
