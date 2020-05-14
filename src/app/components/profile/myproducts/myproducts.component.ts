import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/models/products-profile';
import { DummyService } from '../../../services/dummy.service';
@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  constructor(private dummyService: DummyService ) { }
  filterPost = '';
  dataMyProducts;
  public myproducts: ProductProfileInterface [];
  ngOnInit(): void {
    this.getListProduct();

  }
  getListProduct(){
    this.dataMyProducts = this.dummyService.consultaProducto();
    console.log('myproducto', this.dataMyProducts);

  }

}