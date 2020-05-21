import { DataApiService } from '../../../services/data-api.service';
import { DummyService } from '../../../services/dummy.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-reporte',
  templateUrl: './modal-reporte.component.html',
  styleUrls: ['./modal-reporte.component.css']
})
export class ModalReporteComponent implements OnInit {

  formReporte : FormGroup;

  constructor(public dataApi: DataApiService,
              public dummyService: DummyService  ) { }

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
