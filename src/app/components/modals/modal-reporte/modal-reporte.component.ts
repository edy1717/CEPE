import { ReporteService } from '../../../services/reporte.service';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-reporte',
  templateUrl: './modal-reporte.component.html',
  styleUrls: ['./modal-reporte.component.css']
})
export class ModalReporteComponent implements OnInit {

  formReporte : FormGroup;
  respuesta;
  resultado;

  constructor(public dialogRef: MatDialogRef<ModalReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _reports: ReporteService
                ) { }

  ngOnInit(): void {
    this.formReporteUs();
    this.formReporte.get('id').patchValue(this.data.id);

  }

  formReporteUs(){
  this.formReporte = new FormGroup({
    id : new FormControl (null),
    razon : new FormControl (null),
    descripcion : new FormControl (),
    usuarioCreador : new FormControl (null),
    usuarioReportado : new FormControl (null)

  })
}
actualizarCultivo(){
  this._reports.enviarReporte(this.formReporte.value)
  .subscribe (respBack => {
    this.respuesta = respBack;
    this.resultado = this.respuesta.respBack;
  });
   console.log('form',this.formReporte.value)
   console.log('cultivo', this.formReporte.get('id').value)
 }


}
