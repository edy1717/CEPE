import { ReporteService } from '../../../services/reporte.service';
// import { DataApiService } from '../../../services/data-api.service';
// import { DummyService } from '../../../services/dummy.service';
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

  constructor(public dialogRef: MatDialogRef<ModalReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _reports: ReporteService
                ) { }

  ngOnInit(): void {
    this.formReporteUs();
  }

  formReporteUs(){
  this.formReporte = new FormGroup({
    id : new FormControl (),
    nombre : new FormControl (),
    razon : new FormControl (),
    descripcion : new FormControl (),
    idProfil : new FormControl ()

  })
}
save(){
  console.log(this.formReporte);

}
}
