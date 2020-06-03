
import { CultivoService } from '../../../services/cultivo.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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

  constructor(private _cu: CultivoService, public dialogRef: MatDialogRef<ModalMyProductsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formActProClient();
    this.dataProducts = this.data.item;
    this.formActualizarProductClient.get('id').patchValue(this.data.id.id);
    this.formActualizarProductClient.get('titulo').patchValue(this.data.id.titulo);
    this.formActualizarProductClient.get('descripcion').patchValue(this.data.id.descripcion);
    this.formActualizarProductClient.get('cantidad').patchValue(this.data.id.cantidad);
    this.formActualizarProductClient.get('medida').patchValue(this.data.id.medida);
    this.formActualizarProductClient.get('imagen').patchValue(this.data.id.imagen);


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

  guardar(){
    this._cu.editarCultivo(this.formActualizarProductClient.value)
    .subscribe (respBack => {
      this.respuesta = respBack;
      this.respBack = this.respuesta.codigoOperacionBackend;

    });
    this.getListProduct();
    this.dialogRef.close();
  }

}
