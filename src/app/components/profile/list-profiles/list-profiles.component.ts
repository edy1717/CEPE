import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';

// IMPORTACION DE MODALES
import { ModalReporteComponent } from '../../modals/modal-reporte/modal-reporte.component';
import { ModalProfileComponent } from '../../modals/modal-profile/modal-profile.component';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {

  perfiles: any[];
  forPerfil : FormGroup;
  resultados;
  respuesta;

  // formListProfil : FormGroup;
  // dataProfiles;
  // filterPost = '';
  // respuesta;
  // resultados;

  // cultivo;
  // headElements = ['Id', 'Nombre', 'Correo', 'Direccion', 'Telefono'];

  constructor(  private _us: UsuarioService, public dialog: MatDialog, private router: Router) { }


  ngOnInit(): void {
    // this.getListProfile();
    // this.getListProduct();
    this.consultar();
    this.formMyProfil();
  }

  formMyProfil(){
    this.forPerfil = new FormGroup ({
      id : new FormControl (''),
      nombre: new FormControl  (''),
      correo: new FormControl  (''),
      direccion: new FormControl  (''),
      telefono: new FormControl  ('')
    });
  }
  openDialog(value){
    const dialogRef = this.dialog.open(ModalProfileComponent, {
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
      console.log('Profil', this.resultados);
  });
  }
  eliminarProfile(id){
    this._us.eliminarPerfil(id).subscribe(data => {
      console.log('Eliminado');
      this.consultar();

 });
 }
  misProductos($usuarioCreador){
    this.router.navigate(['/admin/user-products',$usuarioCreador]);
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
