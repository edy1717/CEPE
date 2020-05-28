import { Component, OnInit, Inject } from '@angular/core';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { DummyService } from '../../../services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';
import { UsuarioService } from '../../../services/usuario.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  formActualizarPerfil: FormGroup;
  respuesta;

  constructor( private _use:UsuarioService, public dialogRef:MatDialogRef<ModalProfileComponent>,
               @Inject(MAT_DIALOG_DATA) public data:any) { }


  ngOnInit(): void {
    this.actualizarPerfil();
    this.formActualizarPerfil.get('id').patchValue(this.data.id);
  }

  actualizarPerfil(){
    this.formActualizarPerfil = new FormGroup ({
      nombre : new FormControl (),
      email : new FormControl (),
      phone : new FormControl (),
      direccion : new FormControl (),
    })
  }

  actualizarCliente(){
    console.log('Usuario', this.formActualizarPerfil.get('id').value);
  }
// save(){
//   this._use.consultaCultivo(this.formActualizarPerfil.value).subscribe(res=>{
//     this.respuesta = res;
//     console.log('actualizado', res)
//   })
//   console.log('form',this.formActualizarPerfil.value)
//   console.log('actualizado', this.respuesta)

// }

}
