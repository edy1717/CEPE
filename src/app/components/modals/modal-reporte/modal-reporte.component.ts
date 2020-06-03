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
  dataPost;
  resultado;

  constructor(public dialogRef: MatDialogRef<ModalReporteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private _reports: ReporteService
                ) { }

  ngOnInit(): void {

    this.formReporteUs();
    this.getListPost();
    this.dataPost = this.data;
    this.formReporte.get('usuarioCreador').patchValue(localStorage.getItem('idusu'));
    this.formReporte.get('usuarioReportado').patchValue(this.data.id);

  }

  formReporteUs(){
    this.formReporte = new FormGroup({
    razon : new FormControl (null),
    descripcion : new FormControl (),
    usuarioCreador : new FormControl (null),
    usuarioReportado : new FormControl (null)

  });
}
getListPost(){
  this.dataPost = this._reports.reportUser(this.dataPost);
}

enviarReport(){
   this._reports.enviarReporte(this.formReporte.value)
   .subscribe (respBack => {
   this.respuesta = respBack;
   });
   this.getListPost();
   this.dialogRef.close();
 }


}


