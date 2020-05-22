import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-userprofile',
  templateUrl: './modal-userprofile.component.html',
  styleUrls: ['./modal-userprofile.component.css']
})
export class ModalUserprofileComponent implements OnInit {
  cambiodatos: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.formMyPerfil();
  }

  formMyPerfil(){
    this.cambiodatos = new FormGroup ({
      nombre : new FormControl (),
      Apepat : new FormControl(),
      Apemat : new FormControl(),
      email : new FormControl(),
      contra : new FormControl()
    })
  }
}
