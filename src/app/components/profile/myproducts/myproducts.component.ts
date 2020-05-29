import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/interfaces/products-profile';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { CultivoService } from '../../../services/cultivo.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  formMyproduct : FormGroup;
  respuesta;
  resultados;
  usua;
  dat
  myProducts;

  filterPost = '';
  headElements = [ '#', 'Nombre', 'Descripcion', 'Imagen', 'Cantidad', 'Medida']
  id: any;
  envio ;

  constructor(private activatedRoute: ActivatedRoute,
              private _cs: CultivoService,
              private _us: UsuarioService ) {

   }

   formMyProduct(){
     this.formMyproduct = new FormGroup ({
       id : new FormControl (),
       nombre : new FormControl(),
       descripción : new FormControl(),
       imagen : new FormControl(),
       cantidad : new FormControl(),
       medida: new FormControl  ()
     });
   }

  ngOnInit(): void {
    this.consultar();
    this.formMyProduct();

  }


  // consulta(data){
  //   this._us.consultUserId(data).subscribe (data => {
  //     this.respuesta = data;
  //     this.resultados = this.respuesta.data
  //     console.log('pp', this.resultados)
  // })
  // }

  consultar(){
     this.activatedRoute.params.subscribe (params => {

      if(params.usuarioCreador != null){
        this._cs.consultaCultivo(params).subscribe(datacult => {
        this.myProducts = datacult;
        this.respuesta = this.myProducts.datacult;
        console.log('2e', this.respuesta);
        console.log(datacult);

        });
        this._us.consultUserId(params.usuarioCreador).subscribe(dataus=>{
        this.usua  = dataus;
          /* console.log('respuesta usuario',this.usua); */
        });
      }
    });
}


elimina(id){
  this._cs.eliminarCultivo(id).subscribe(data => {
    console.log('Eliminado');
    this.consultar();
  });
}

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]


}
