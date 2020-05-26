import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../../../services/dummy.service';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {

  formListProfil : FormGroup;
  myProducts : any =  [];
  dataProfiles;
  filterPost = '';
  respuesta;
  resultados
  headElements = ['Id', 'Nombre', 'Correo', 'Direccion', 'Telefono'];

  constructor(  private router:Router, private _us: UsuarioService) { }

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

  // consultar(){
  //   this._us.consultUsers(this.formListProfil.value).subscribe (data => {
  //     this.respuesta = data ;
  //     this.dataProfiles = this.respuesta.dataProfiles
  //       console.log(this.dataProfiles)
  //   })
  // }
  consultar(){
    this._us.consultUsers().subscribe (data => {
      this.respuesta = data ;
    this.resultados = this.respuesta.resultados
      console.log('esto es data de perfil', data)
      console.log('resu', this.resultados)
  })
  }


  // removerDato() {
  //   if(this.formDelete.valid)  {
  //     console.log(this.formDelete.value)
  //   }else{
  //   }
  //   this.formDelete.reset()
  // }


  // getListProfile(){
  //   this.dataProfiles = this.dummyService.consultaProfile();
  // }

  // getListProduct(){
  //   this.dataProducts = this.dummyService.consultaProducto();
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
