import { Component, OnInit } from '@angular/core';
import { ModalHomeComponent } from '../modals/modal-home/modal-home.component';
import { CultivoService } from '../../services/cultivo.service';
import { ProductInterface } from '../../interfaces/products';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 registros: any[];
 formmyPoduct : FormGroup;
 resultados;
 respuesta;

 filterPost = '';
 productos ;
 dataProducts;


constructor( public dialog: MatDialog, private _cs: CultivoService ) { }

  ngOnInit(): void {
    this.consultar();
    this.formMyProduct();


  }

  formMyProduct(){
    this.formmyPoduct = new FormGroup ({
      id : new FormControl (''),
      nombre : new FormControl(''),
      descripción : new FormControl(''),
      imagen : new FormControl(''),
      cantidad : new FormControl(''),
      medida: new FormControl  ('')
    })
  }

  /* consultarId(){
   this._cs.consultaCultivo(id).subscribe((productos: any) =>{
     console.log(productos);
    });
  } */

  consultar(){
    this._cs.consultarTodosCultivos().subscribe (data => {
      this.respuesta = data ;
      this.resultados = this.respuesta.resultados;
      console.log('esto es data', data);
      console.log('resu', this.resultados);
  })
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalHomeComponent, {
      width: '450px',
      data: { item : value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  handlePage(e: PageEvent){
     this.page_size = e.pageSize
     this.page_number = e.pageIndex + 1
   }

   page_size: number =4;
   page_number: number = 1;
   pageSizeOptions  = [4, 8, 16, 24, 32, 40, 48 ,  80 , 100]

}
