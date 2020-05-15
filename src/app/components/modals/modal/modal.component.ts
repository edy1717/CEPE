import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { NgForm } from '@angular/forms'
import { ProductInterface } from '../../../interfaces/products';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor( public dataApi : DataApiService ) { }

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

}
