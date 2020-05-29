import { Component, OnInit, Inject } from '@angular/core';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { CultivoService } from '../../../services/cultivo.service';
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

  constructor( private _use:UsuarioService, public dialogRef:MatDialogRef<ModalProfileComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit(): void {
    this.actualizarPerfil();
    this.getListPost();
    this.dataPost = this.data.item;
    this.formPerfil.get('id').patchValue(this.data.id);
  }

  actualizarPerfil(){
    this.formPerfil = new FormGroup ({
      id : new FormControl (''),
      nombre: new FormControl  (''),
      apepat: new FormControl  (''),
      apemat: new FormControl  (''),
      correo: new FormControl  (''),
      direccion: new FormControl  (''),
      telefono: new FormControl  (''),
      password: new FormControl  ('')

    })
  }
  getListPost(){
    this.dataPost = this._use.consultUserId(this.dataPost);
  }
  guardarPerfil(){
    console.log(this._use);
    this._use.editarPerfil(this.formPerfil.value)
    .subscribe (respBack => {
      this.respuesta = respBack;
      this.respBack = this.respuesta.codigoOperacionBackend;
    });
    console.log('form',this.formPerfil.value)
    console.log('Post', this.formPerfil.get('id').value)
   }

}
