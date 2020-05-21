import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DummyService } from '../../../services/dummy.service';


@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  formActualizarPerfil : FormGroup;

  constructor( private dummyService: DummyService) { }

  ngOnInit(): void {
    this.actualizarPerfil();
  }

  actualizarPerfil(){
    this.formActualizarPerfil = new FormGroup ({
      nombre : new FormControl (),
      email : new FormControl (),
      telefono : new FormControl (),
      direccion : new FormControl (),
    })
  }

save(){
  console.log(this.formActualizarPerfil)
}

}
