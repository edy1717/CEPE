import { Component, OnInit, Inject, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { CultivoService } from '../../../services/cultivo.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import Swal from 'sweetalert2';
import { FileReaderPromiseLikeService, FileReaderObservableLikeService } from 'fctrlx-angular-file-reader';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {

  formActualizarProduct: FormGroup;
  respuesta;
  respBack;
  dataProducts;
  archivos: any;
  imag
  imageError: string;


 constructor( public dialogRef: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private _cs: CultivoService ,
  private promiseService: FileReaderPromiseLikeService) {

 }

 ngOnInit(): void {
   this.formProduct();
   this.getListProduct();
   this.dataProducts = this.data.item;
   this.formActualizarProduct.get('id').patchValue(this.data.id.id);
   this.formActualizarProduct.get('titulo').patchValue(this.data.id.titulo);
   this.formActualizarProduct.get('tipo').patchValue(this.data.id.tipo);
   this.formActualizarProduct.get('descripcion').patchValue(this.data.id.descripcion);
   this.formActualizarProduct.get('medida').patchValue(this.data.id.medida);
   this.formActualizarProduct.get('cantidad').patchValue(this.data.id.cantidad);

}

 formProduct(){
   this.formActualizarProduct = new FormGroup({
     id : new FormControl (null),
     titulo : new FormControl (null),
     tipo : new FormControl (null),
     descripcion : new FormControl (null),
     medida : new FormControl (null),
     cantidad : new FormControl (null),
     imagen: new FormControl(null)

   })
 }

getListProduct(){
  this.dataProducts = this._cs.consultaCultivo(this.dataProducts);
}

 actualizarCultivo(){
   console.log(this.formActualizarProduct.value);

    this._cs.editarCultivo(this.formActualizarProduct.value)
    .subscribe (respBack => {
      this.respuesta = respBack;
      this.respBack = this.respuesta.codigoOperacionBackend;
    });
    this.getListProduct();
    this.dialogRef.close();
 }

onFileSelected(event: any)
 {
   const file = event.target.files[0] ? event.target.files[0] : false;
   const max_size = 20971520;
   if (event.target.files[0].size > max_size) {
    this.imageError =
        'Maximum size allowed is ' + max_size / 1000 + 'Mb';

    return false;
}
     if(file)
     {
       this.promiseService.toBase64(file).then((result) => {
        const image = result.split(',')[1];
        let imageb64 = image.slice(4)
        this.formActualizarProduct.get('imagen').setValue(imageb64)
       });
     }
 }


}
