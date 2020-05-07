import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../models/products';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor( private dataApi: DataApiService ) { }

  filterPost = '';

  public products : ProductInterface[];

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(){
    this.dataApi.getAllProducts()
    .subscribe(products => {
      this.products = products;
    });
  }

  onDeleteProduct(idProduct: string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
      this.dataApi.deleteProduct(idProduct);
    }
  }

  onPreUpdateProduct(product: ProductInterface) {
    console.log('Productos', product);
    this.dataApi.selectedProduct = Object.assign({}, product);
  }

}
