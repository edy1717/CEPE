import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { NgForm, FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { CultivoService } from 'src/app/services/cultivo.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})

export class ModalComponent implements OnInit {

  formActualizarProduct : FormGroup;
  public products =[];
  public product = '';
  respuesta;
  dataProducts;

  constructor( private _sc : CultivoService  ) { }

  @ViewChild('btnClose') btnClose : ElementRef;

 


  ngOnInit(): void {
    // this.dataApi.getAllProducts().subscribe(products => {
    //   this.products = products;
    // })
  
    this.formProduct()

  }

  formProduct(){
    this.formActualizarProduct = new FormGroup({
      id : new FormControl (),
      titulo : new FormControl (),
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

  actualizarCultivo(){
    this._sc.editarCultivo(this.formActualizarProduct.value).subscribe ( respEditar => {
      this.respuesta = respEditar
      console.log('editar', this.respuesta)
      console.log('editar1', respEditar)
    })
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
