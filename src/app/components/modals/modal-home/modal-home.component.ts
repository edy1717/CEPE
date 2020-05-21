import { Component, OnInit, Inject } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ProductInterface {
  id: string;
  nombre: string;
  descripcion: string;
  portada: string;
  cantidad: string;
  medida:string;

}

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {
 
  dataProducts;

  constructor( public dialogRef: MatDialogRef<ModalHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductInterface, public dummyService : DummyService ) { }

    ngOnInit(): void {
      this.getListProduct()
    }
  
    getListProduct(){
      this.dataProducts = this.dummyService.consultaProducto();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
