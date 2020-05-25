import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ReporteService } from '../../../services/reporte.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  
  formReporte : FormGroup;
  myProducts : any=[];
  respuesta ;
  resultados ;
  filterPost = '';
  dataProducts;
  headElements = ['#','Nombre del cliente','Motivo', 'Resolución' ];

  constructor( private _rs : ReporteService) { }

  crearConsulta(){
    this.formReporte = new FormGroup ({
      nombre: new FormControl (),
      motivo: new FormControl (),
      resolucion: new FormControl() 
    })
  }

  ngOnInit(): void {
    this.crearConsulta()
  }

  consulta(){
    this._rs.reportUser(this.formReporte.value).subscribe ( data =>{
      this.respuesta = data;
      this.resultados = this.respuesta.data
      console.log(this.resultados)
    })
  }

  onDeleteProducts(i : string):void{
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
    this.dataProducts.splice(i, 1)
    }
  }


  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
