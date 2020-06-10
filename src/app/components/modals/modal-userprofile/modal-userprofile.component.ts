import { UsuarioService } from '../../../services/usuario.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-userprofile',
  templateUrl: './modal-userprofile.component.html',
  styleUrls: ['./modal-userprofile.component.css']
})
export class ModalUserprofileComponent implements OnInit
{
  cambiodatos: FormGroup;
  respuesta;
  respBack;
  
  constructor(public dialogRef: MatDialogRef<ModalUserprofileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _us: UsuarioService) { }

  ngOnInit(): void {
    this.formMyPerfil();
    this.cambiodatos.get('id').patchValue(this.data.id.id);
    this.cambiodatos.get('nombre').patchValue(this.data.id.nombre);
    this.cambiodatos.get('apellidoPaterno').patchValue(this.data.id.apellidoPaterno);
    this.cambiodatos.get('apellidoMaterno').patchValue(this.data.id.apellidoMaterno);
    this.cambiodatos.get('email').patchValue(this.data.id.email);

  }

  formMyPerfil(){
    this.cambiodatos = new FormGroup ({
      id : new FormControl(null),
      nombre : new FormControl (null),
      apellidoPaterno : new FormControl(null),
      apellidoMaterno : new FormControl(null),
      email : new FormControl(null)
    });
  }
  guardar(){
    this._us.editarPerfil(this.cambiodatos.value)
    .subscribe(respEditar => {
      this.respuesta = respEditar
      this.respBack =this.respuesta.exito
      this.dialogRef.close(this.cambiodatos.value)
    });  
}

onNoClick(): void {
  this.dialogRef.close();
}

}
