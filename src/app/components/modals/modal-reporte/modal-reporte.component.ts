import { Component, OnInit } from '@angular/core';
import { NgForm , FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-reporte',
  templateUrl: './modal-reporte.component.html',
  styleUrls: ['./modal-reporte.component.css']
})
export class ModalReporteComponent implements OnInit {

  formReporte : FormGroup;

  constructor(
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
