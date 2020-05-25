import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
//import { DataApiService } from '../../../services/data-api.service';
import { NgForm, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { DummyService } from 'src/app/services/dummy.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})

export class ModalComponent implements OnInit {

  formActualizarProduct : FormGroup;

  // constructor( public dataApi : DataApiService,
  //                public dummyService : DummyService   ) { }

  @ViewChild('btnClose') btnClose : ElementRef;

  public products =[];
  public product = '';


  ngOnInit(): void {
    // this.dataApi.getAllProducts().subscribe(products => {
    //   this.products = products;
    // })
    // this.formProduct()
  }

  formProduct(){
    this.formActualizarProduct = new FormGroup({
      id : new FormControl (),
      nombre : new FormControl (),
      descripcion : new FormControl (),
      portada : new FormControl (),
      cantidad : new FormControl (),
      medida : new FormControl (),
      imagen: new FormControl(),
    })
  }

  save(){
    console.log('holi', this.formProduct)
  }


  // onSaveProduct( productForm: NgForm ):void{
  //   if(productForm.value.id == null) {
  //     //nuevo
  //     this.dataApi.addProduct(productForm.value);
  //   }else {
  //     this.dataApi.updateProduct(productForm.value);
  //   }
  // productForm.resetForm();
  // this.btnClose.nativeElement.click();
  // }
}
