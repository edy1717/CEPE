import { Component, OnInit, Inject } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  formActualizarProduct : FormGroup;
  respuesta;
  dataProducts;
  

 constructor(  public dialogRef :MatDialogRef<ModalComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any, private _cs: CultivoService  ) { }
 


 ngOnInit(): void {
   // this.dataApi.getAllProducts().subscribe(products => {
    //this.products = products;
   // })
   this.getListProduct();
   this.dataProducts = this.data.item;
   // console.log('holi', this.dataProducts);
   //this.formProduct()

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
   this._cs.editarCultivo(this.formActualizarProduct.value).subscribe ( respEditar => {
     this.respuesta = respEditar
     console.log('editar', this.respuesta)
     console.log('editar1', respEditar)
   })
 }

 getListProduct(){
   this.dataProducts = this._cs.consultaCultivo(this.dataProducts);
 }

onNoClick(): void {
 this.dialogRef.close();
}



 // onSaveProduct( productForm: NgForm ):void{
  //if(productForm.value.id == null) {
    //nuevo
  //   this.dataApi.addProduct(productForm.value);
  // }else {
  //   this.dataApi.updateProduct(productForm.value);
  // }
 // productForm.resetForm();
 // this.btnClose.nativeElement.click();
 // }

}
