import { Component, OnInit, Inject, Input, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnChanges,OnInit {

  formActualizarProduct : FormGroup;
  respuesta
  respBack
  @Input() cultivoId;


 constructor(  private _cs: CultivoService  ) { 
  this.formProduct();
 }
 
 ngOnInit(): void {
  
}

ngOnChanges(changes: SimpleChanges): void {
  this.formActualizarProduct.get('id').setValue(this.cultivoId);  
  console.log(this.cultivoId)
}


 formProduct(){
   this.formActualizarProduct = new FormGroup({
     id : new FormControl (this.cultivoId),
     titulo : new FormControl (),
     descripcion : new FormControl (),
     portada : new FormControl (),
     cantidad : new FormControl (),
     medida : new FormControl (),
     imagen: new FormControl(),
     tipo : new FormControl ()
   })
 }


 actualizarCultivo(){
  // this._cs.editarCultivo(this.formActualizarProduct.value)
  // .subscribe (respBack => {
  //   this.respuesta = respBack
  //   this.respBack = this.respuesta.codigoOperacionBackend
  // });
  console.log(this.formActualizarProduct.value)
 }



}
