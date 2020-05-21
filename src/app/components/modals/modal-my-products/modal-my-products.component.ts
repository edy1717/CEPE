
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-my-products',
  templateUrl: './modal-my-products.component.html',
  styleUrls: ['./modal-my-products.component.css']
})
export class ModalMyProductsComponent implements OnInit {

  formActualizarProductClient : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formActProClient()
  }

  formActProClient(){
    this.formActualizarProductClient = new FormGroup ({
      idProCli : new FormControl (),
      nombre: new FormControl (),
      descripcion : new FormControl (),
      cantidad : new FormControl (),
      medida : new FormControl (),
      imagen:new FormControl(),
    })
  }



  save(){
    console.log(this.formActualizarProductClient)
  }

}
