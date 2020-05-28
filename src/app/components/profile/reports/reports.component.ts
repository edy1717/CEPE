import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { ReporteService } from '../../../services/reporte.service';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  filterPost;
  myProducts:any=[];
  headElements=['#', 'Nombre del cliente','Descripcion', 'Tipo de reporte', 'Estatus de reporte', 'Resolución'];
  formReport : FormGroup;
  resultados;
  respuesta;

  constructor( private _rp : ReporteService) { }

  ngOnInit(): void {
  }

  formReporte(){
    this.formReport = new FormGroup ({
      nombre: new FormControl (),
      descripcion: new FormControl(),
      tiporepo: new FormControl(),
      estatusrepo: new FormControl(),
      resolucion: new FormControl()
    })
  }

  consulta(){
    this._rp.reportUser(this.formReport.value).subscribe( data =>{
      this.respuesta = data
      this.resultados = this.respuesta.resultados
      console.log(this.respuesta)

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
