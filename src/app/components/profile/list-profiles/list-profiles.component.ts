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
  headElements = ['Id Cliente','Nombre','Correo electronico','Ubicación' ];
  forPerfil : FormGroup;
  resultados;
  respuesta;
  filterPost = '';

  constructor(  private _us: UsuarioService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
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
      if (!result){
        return;
      }
      value = result

      this.consultar();
    });
  }

  consultar(){
    this._us.consultUsers().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data;
  })
  }

openDialogRep(value){
  const dialogRef = this.dialog.open(ModalReporteComponent, {
    width: '450px',
    data: {id : value}
  });
  dialogRef.afterClosed().subscribe(resul =>{
    if (!resul){
      return;
    }
    value = resul
    this.consultar();
  });
  }

  eliminarProfile(id:string) {
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
      this._us.eliminarPerfil(id).subscribe(data => {
      this.consultar();
})
    }
    this.forPerfil.reset()
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
