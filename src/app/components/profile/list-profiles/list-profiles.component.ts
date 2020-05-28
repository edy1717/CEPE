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

  formListProfil : FormGroup;
  dataProfiles;
  filterPost = '';
  respuesta;
  resultados;

  cultivo;
  headElements = ['Id', 'Nombre', 'Correo', 'Direccion', 'Telefono'];

  constructor(  private router:Router, private _us: UsuarioService,  public dialog:MatDialog) { }

  formListpro(){
    this.formListProfil = new FormGroup ({
      nombre : new FormControl (),
      email : new FormControl (),
      direccion : new FormControl (),
      phone : new FormControl (),
    })
  }

  ngOnInit(): void {
    // this.getListProfile();
    // this.getListProduct();
    this.formListpro();
    this.consultar();
  }

  consultar(){
    this._us.consultUsers().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data
  })
  }

openDialog(value){
  const dialogRef = this.dialog.open(ModalProfileComponent, {
    width: '450px',
    data: { id: value}
  });
  dialogRef.afterClosed().subscribe(resul =>{
  });
}

openDialogRep(value){
  const dialogRef = this.dialog.open(ModalReporteComponent, {
    data: {id : value}
  });
  dialogRef.afterClosed().subscribe(resul =>{
  });
}

  eliminarProfile(id){
    this._us.eliminarPerfil(id).subscribe(data => {
    console.log('Eliminado');
    this.consultar();

 });
 }


  // removerDato() {
  //   if(this.formDelete.valid)  {
  //     console.log(this.formDelete.value)
  //   }else{
  //   }
  //   this.formDelete.reset()
  // }

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
