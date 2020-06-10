import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../interfaces/user';
import {
 ModalUserprofileComponent
} from '../../modals/modal-userprofile/modal-userprofile.component';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formMyProfil : FormGroup;
  resultados;
  respuesta;
  usuario:{};


  constructor( public dialog: MatDialog, private _us:UsuarioService) { }

  ngOnInit(): void {
    this.consultar();
    this.formProfil();
    this.buscar();
    this.formMyProfil.get('nombre').patchValue(this.usuario);
  }

  formProfil(){
    this.formMyProfil = new FormGroup ({
      nombre : new FormControl ({value: '', disabled: true}),
      apepat : new FormControl ({value: '', disabled: true}),
      apemat : new FormControl ({value: '', disabled: true}),
      correo : new FormControl ({value: '', disabled: true}),
      contrasena: new FormControl ({value: '', disabled: true})
    });
  }
  openDialog(value){
    const dialogRef = this.dialog.open(ModalUserprofileComponent, {
      width: '450px',
      data: { id : value }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }
      value = result
      this.buscar();
    });
  }

  consultar(){
    this._us.consultUsers().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data;
  });
  }

  buscar(){
  this._us.buscarUserId(localStorage.getItem('idusu')).subscribe (data =>{
  this.usuario=data['data'];
  });
 }

}
