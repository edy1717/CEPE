import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {

  dataProducts;

  constructor( public dummyService : DummyService ) { }

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct(){
    this.dataProducts = this.dummyService.consultaProducto();
    console.log('producto', this.dataProducts)
  }

}
