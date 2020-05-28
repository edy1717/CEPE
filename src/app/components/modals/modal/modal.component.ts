import { Component, OnInit, Inject, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs/internal/Subject';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  formActualizarProduct : FormGroup;
  respuesta
  respBack;
  dataProducts;
  
 constructor( public dialogRef: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private _cs: CultivoService  ) { 
  this.formProduct();
 }
 
 ngOnInit(): void {
   this.getListProduct()
   this.dataProducts = this.data.item;
  this.formActualizarProduct.get('id').patchValue(this.data.id); 
  console.log('on', this.formActualizarProduct.value)
  console.log('data', this.data)
}


 formProduct(){
   this.formActualizarProduct = new FormGroup({
     id : new FormControl (null),
     titulo : new FormControl (null),
     descripcion : new FormControl (null),
     portada : new FormControl (null),
     cantidad : new FormControl (null),
     medida : new FormControl (null),
     imagen: new FormControl(null),
     tipo : new FormControl (null)
   })
 }


getListProduct(){
  this.dataProducts = this._cs.consultaCultivo(this.dataProducts);
}


 actualizarCultivo(){
  this._cs.editarCultivo(this.formActualizarProduct.value)
  .subscribe (respBack => {
    this.respuesta = respBack
    this.respBack = this.respuesta.codigoOperacionBackend
  });
  console.log('form',this.formActualizarProduct.value)
  console.log('cultivo', this.formActualizarProduct.get('id').value)
 }



}
