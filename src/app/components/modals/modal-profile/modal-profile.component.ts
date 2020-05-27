import { Component, OnInit } from '@angular/core';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { DummyService } from '../../../services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';


@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  formActualizarPerfil : FormGroup;
  respuesta

  constructor( private _sc : CultivoService) { }

  ngOnInit(): void {
    this.actualizarPerfil();
  }

  actualizarPerfil(){
    this.formActualizarPerfil = new FormGroup ({
      nombre : new FormControl (),
      email : new FormControl (),
      phone : new FormControl (),
      direccion : new FormControl (),
    })
  }

save(){
  this._sc.consultaCultivo(this.formActualizarPerfil.value).subscribe(res=>{
    this.respuesta = res;
    console.log('actualizado', res)
  })
  console.log('form',this.formActualizarPerfil.value)
  console.log('actualizado', this.respuesta)

}

}
