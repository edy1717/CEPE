import { Component, OnInit, Inject } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { CultivoService } from '../../../services/cultivo.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


export interface ProductInterface {
  // id: string;
  // nombre: string;
  // descripcion: string;
  // portada: string;
  // cantidad: string;
  // medida:string;

}

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {

  dataProducts;

  constructor( public dialogRef: MatDialogRef<ModalHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _cs: CultivoService ) { }

    ngOnInit(): void {
       this.getListProduct();
       this.dataProducts = this.data.item;
       console.log('holi', this.dataProducts);

    }
    getListProduct(){
      this.dataProducts = this._cs.consultaCultivo(this.dataProducts);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
