import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/interfaces/products-profile';
import { DummyService } from '../../../services/dummy.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { CultivoService } from '../../../services/cultivo.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  myProducts : any =  [];
  formMyproduct : FormGroup;
  respuesta;
  resultados;

  filterPost = '';
  headElements = [ '#', 'Nombre', 'Descripcion', 'Imagen', 'Cantidad', 'Medida'] 

  constructor(private activatedRoute: ActivatedRoute, private dummyService: DummyService, private _cs :CultivoService,
   ) {
    this.activatedRoute.params.subscribe (params => {
      if(params.idProfile != null){
        this.myProducts = this.dummyService.productoProfiles(params['idProfile']);
      }
    });
   }

   formMyProduct(){
     this.formMyproduct = new FormGroup ({
       id : new FormControl (),
       nombre : new FormControl(),
       descripción : new FormControl(),
       imagen : new FormControl(),
       cantidad : new FormControl(),
       medida: new FormControl  ()
     })
   }

  ngOnInit(): void {
    this.formMyProduct();
    this.consultar();
  }

  consultar(){  
    this._cs.consultaCultivo(this.formMyproduct.value).subscribe (data => {
      this.respuesta = data ;
      this.resultados = this.respuesta.resultados
        console.log(this.resultados)
    })
  }



  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]


}
