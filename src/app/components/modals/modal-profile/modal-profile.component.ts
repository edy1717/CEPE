import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  formPerfil: FormGroup;
  dataPost;
  respuesta;
  respBack;
  id: any;

  constructor( private _use:UsuarioService, public dialogRef:MatDialogRef<ModalProfileComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.actualizarPerfil();
    this.getListPost();
    this.dataPost = this.data.item;
    this.formPerfil.get('id').patchValue(this.data.id.id);
    this.formPerfil.get('nombre').patchValue(this.data.id.nombre);
    this.formPerfil.get('apellidoPaterno').patchValue(this.data.id.apellidoPaterno);
    this.formPerfil.get('apellidoMaterno').patchValue(this.data.id.apellidoMaterno);
    this.formPerfil.get('email').patchValue(this.data.id.email);
    this.formPerfil.get('ubicacion').patchValue(this.data.id.ubicacion);
    this.id = this.data.id.id;
  }

  actualizarPerfil(){
    this.formPerfil = new FormGroup ({
      id : new FormControl (''),
      nombre: new FormControl  (Validators.required),
      apellidoPaterno: new FormControl  (Validators.required),
      apellidoMaterno: new FormControl  (Validators.required),
      email: new FormControl  (null),
      ubicacion: new FormControl  (null),
      telefono: new FormControl  (null)
    });
  }
  getListPost(){
    this.dataPost = this._use.consultUserId(this.dataPost);
  }
  guardarPerfil(){
    this._use.editarPerfil(this.formPerfil.value)
    .subscribe(respEditar => {
      this.respuesta = respEditar
      this.respBack =this.respuesta.exito
      this.dialogRef.close(this.formPerfil.value)
    });  
   }
   onNoClick(): void {
    this.dialogRef.close();
  }
}