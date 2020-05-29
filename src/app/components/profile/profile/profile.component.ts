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
  constructor( private authService : AuthService , public dialog: MatDialog, private router:Router, private _us:UsuarioService) { }

  ngOnInit(): void {
    this.consultar();
    this.formProfil();
  }

  formProfil(){
    this.formMyProfil = new FormGroup ({
      nombre : new FormControl (''),
      apepat : new FormControl (''),
      apemat : new FormControl (''),
      correo : new FormControl (''),
      contrasena: new FormControl  ('')
    })
  }
  openDialog(value){
    const dialogRef = this.dialog.open(ModalUserprofileComponent, {
      width: '450px',
      data: { id : value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  consultar(){
    this._us.consultUsers().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data;
      console.log('anna', this.resultados);
  });
  }













  // Rutas
  rutProd(){
    this.router.navigate(['admin/list-products']);
  }
  rutPerfiles(){
    this.router.navigate(['admin/list-profiles']);
  }
  rutPost(){
    this.router.navigate(['admin/offers']);
  }
  rutReport(){
    this.router.navigate(['admin/reports']);
  }
}
