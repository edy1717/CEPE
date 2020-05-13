import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/products';
import { NgForm } from '@angular/forms';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor( private dataApi: DataApiService, private dummyService : DummyService ) { }

  filterPost = '';
  dataProducts;

  public products : ProductInterface[];

  ngOnInit(): void {
    // this.getListProducts();
    this.getListProduct();
  }

  getListProduct(){
    this.dataProducts = this.dummyService.consultaProducto();
    console.log('producto', this.dataProducts)
  }

  // getListProducts(){
  //   this.dataApi.getAllProducts()
  //   .subscribe(products => {
  //     this.products = products;
  //   });
  // }

  onDeleteProduct(idProduct: string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
      this.dataApi.deleteProduct(idProduct);
    }
  }
  onDeleteProducts(indice : string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
    this.dataProducts.splice(indice, 1)
    }
  }

  onPreUpdateProduct(product: ProductInterface) {
    this.dataApi.selectedProduct = Object.assign({}, product);
  }

}
