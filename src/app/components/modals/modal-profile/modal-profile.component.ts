import { Component, OnInit, Inject } from '@angular/core';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { CultivoService } from '../../../services/cultivo.service';
import { UsuarioService } from '../../../services/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';


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
      nombre: new FormControl  (''),
      apellidoPaterno: new FormControl  (''),
      apellidoMaterno: new FormControl  (''),
      email: new FormControl  (''),
      ubicacion: new FormControl  (''),
      telefono: new FormControl  ('')
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
    // .subscribe (respBack => {
    //   this.respuesta = respBack;
    //   this.respBack = this.respuesta.codigoOperacionBackend;
    // });
    // this.dialogRef.close();
   }

}
