
import { CultivoService } from '../../../services/cultivo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-my-products',
  templateUrl: './modal-my-products.component.html',
  styleUrls: ['./modal-my-products.component.css']
})
export class ModalMyProductsComponent implements OnInit {
  formActualizarProductClient: FormGroup;
  dataProducts;
  respuesta;
  respBack;
  archivos: any;
  imag;
  imageError: string;
  id:any;

  constructor(private _cu: CultivoService, public dialogRef: MatDialogRef<ModalMyProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private promiseService: FileReaderPromiseLikeService) { }

  ngOnInit(): void {
    this.formActProClient();
    this.dataProducts = this.data.item;
    this.formActualizarProductClient.get('id').patchValue(this.data.id.id);
    this.formActualizarProductClient.get('titulo').patchValue(this.data.id.titulo);
    this.formActualizarProductClient.get('descripcion').patchValue(this.data.id.descripcion);
    this.formActualizarProductClient.get('cantidad').patchValue(this.data.id.cantidad);
    this.formActualizarProductClient.get('medida').patchValue(this.data.id.medida);
    this.formActualizarProductClient.get('imagen').patchValue(this.data.id.imagen);
    this.id = this.data.id.id;
  }


  formActProClient(){
    this.formActualizarProductClient = new FormGroup ({
     id : new FormControl (null),
     titulo : new FormControl (null),
     descripcion : new FormControl (null),
     cantidad : new FormControl (null),
     medida : new FormControl (null),
     imagen: new FormControl(null)
    });
  }
  getListProduct(){
    this.dataProducts = this._cu.consultaCultivo(this.dataProducts);
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
      this.formActualizarProductClient.get('imagen').setValue(imageb64)
        });
      }
  }
  guardar(){
    this._cu.editarCultivo(this.formActualizarProductClient.value)
    .subscribe(respEditar => {
      this.respuesta = respEditar
      this.respBack =this.respuesta.exito
      
      if(this.respBack === true){
        Swal.fire({
         icon: 'success',
         title: 'Exito',
         text: 'Se actualizó con éxito'
       }).then(dato=>{
         location.reload()
       });
      }
    });  
  
  //   this._cu.editarCultivo(this.formActualizarProductClient.value)
  //   .subscribe (respBack => {
  //     this.respuesta = respBack;
  //     this.respBack = this.respuesta.codigoOperacionBackend;

  //   });
  //   this.getListProduct();
  //   this.dialogRef.close();
  // }

}

}