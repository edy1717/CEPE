import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { ReporteService } from '../../../services/reporte.service';
import { ModalReporteComponent } from '../../modals/modal-reporte/modal-reporte.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  filterPost = '';
  myProducts:any=[];
  headElements=['Id de reporte', 'Razón','Descripcion', 'Id de Usuario Reportado', 'Id de Usuario Creador', 'Fecha de Reporte'];
  formReport : FormGroup;
  resultados;
  respuesta;

  constructor( private _rp : ReporteService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formReporte();
    this.consulta();
  }

  formReporte(){
    this.formReport = new FormGroup ({
      razon: new FormControl (null),
      descripcion: new FormControl(null),
      usuarioReportado: new FormControl(null),
      usuarioCreador: new FormControl(null),
      fecha: new FormControl(null)
    })
  }

  consulta(){
    this._rp.consultarReport().subscribe( data =>{
      this.respuesta = data
      this.resultados = this.respuesta.data
      console.log(this.respuesta)

    })
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalReporteComponent, {
      width: '450px',
      data: { id : value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

//   eliminarPost(id){

//     this._rp.(id).subscribe(data => {
//       console.log('Eliminado');
//       this.consultar();

//  });
//  }


  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
