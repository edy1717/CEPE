import { UsuarioService } from '../../../services/usuario.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-userprofile',
  templateUrl: './modal-userprofile.component.html',
  styleUrls: ['./modal-userprofile.component.css']
})
export class ModalUserprofileComponent implements OnInit
{
  cambiodatos: FormGroup;
  respuesta;
  constructor(public dialogRef: MatDialogRef<ModalUserprofileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _us: UsuarioService) { }

  ngOnInit(): void {
    this.formMyPerfil();
    console.log(this.data);

    this.cambiodatos.get('id').patchValue(this.data.id.id);
    this.cambiodatos.get('nombre').patchValue(this.data.id.nombre);
    this.cambiodatos.get('apellidoPaterno').patchValue(this.data.id.apellidoPaterno);
    this.cambiodatos.get('apellidoMaterno').patchValue(this.data.id.apellidoMaterno);
    this.cambiodatos.get('email').patchValue(this.data.id.email);

  }

  formMyPerfil(){
    this.cambiodatos = new FormGroup ({
      id : new FormControl(),
      nombre : new FormControl (),
      apellidoPaterno : new FormControl(),
      apellidoMaterno : new FormControl(),
      email : new FormControl()
    });
  }
  guardar(){
    this._us.editarPerfil(this.cambiodatos.value)
    .subscribe (respBack => {
     this.respuesta = respBack;

    });
    this.dialogRef.close();
    // this.getListProduct();
}
}
