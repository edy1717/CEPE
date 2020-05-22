import { Component, OnInit } from '@angular/core';
// import { DataApiService } from '../../services/data-api.service';
import { ProductInterface } from '../../interfaces/products';
// import { DummyService } from '../../services/dummy.service';
import { PageEvent } from '@angular/material/paginator';
import { CultivoService } from '../../services/cultivo.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  formConsulta : FormGroup;
  respuesta ;
  resultados ;
  filterPost = '';
  dataProducts;
  headElements = ['#','Nombre','Descripción','Portada','Cantidad','Medida', ' ', ' ' ];

  constructor( 
                private cultivoServ : CultivoService
                ) { }



  crearConsulta(){
    this.formConsulta = new FormGroup ({
      id : new FormControl (),
      nombre : new FormControl ( null, [Validators.required]),
      descripción : new FormControl (null, [Validators.required]),
      portada : new FormControl (null, [Validators.required]),
      cantidad: new FormControl (null, [Validators.required]),
      medida : new FormControl ( null,  [Validators.required]),
      })
  }


  ngOnInit(): void {
    //this.getListProduct();
    this.crearConsulta();
    this.consultar();
    
  }

  consultar(){
    
    this.cultivoServ.consultaCultivo(this.formConsulta.value).subscribe (data => {
      this.respuesta = data ;
      this.resultados = this.respuesta.resultados
        console.log(this.resultados)
    })
  }

  // getListProduct(){
  //   this.dataProducts = this.dummyService.consultaProducto();
  //   console.log('producto', this.dataProducts)
  // }

  onDeleteProducts(i : string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
    this.dataProducts.splice(i, 1)
    }
  }

  // onPreUpdateProduct(product: ProductInterface) {
  //   //this.dataApi.selectedProduct = Object.assign({}, product);
  //   this.dummyService.selectedProducts = Object.assign({}, product)
  //   console.log('que pedo',product)
  // }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

  

}
