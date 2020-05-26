import { Component, OnInit } from '@angular/core';
//import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';
import { reduce, tap } from 'rxjs/operators';
// import { DummyService } from '../../services/dummy.service';
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

 // let html
 registros: any[];
 formMyproduct : FormGroup;
 public productos:ProductInterface;


constructor( public dialog: MatDialog, private _cs :CultivoService ) { }

  filterPost = '';
  dataProducts;


  ngOnInit(): void {
    this.consultarTodos();
    this.formMyProduct();
    this.consultarId();

  }

  formMyProduct(){
    this.formMyproduct = new FormGroup ({
      id : new FormControl (''),
      nombre : new FormControl(''),
      descripción : new FormControl(''),
      imagen : new FormControl(''),
      cantidad : new FormControl(''),
      medida: new FormControl  ('')
    })
  }

  consultarId(){
    console.log('Hola');

   this._cs.consultaCultivo()
   .subscribe((productos: any) =>{
     console.log(productos);


    });
  }

  consultarTodos(){
    console.log('Hola');

   this._cs.consultarTodosCultivos()
   .subscribe((productos: any) =>{
     console.log(productos);


    });
  }

  getListBooks(): void {
    this._cs
      .consultaCultivo()
      .subscribe((productos: ProductInterface) => (this.productos = productos));
  }






  openDialog(value){
    const dialogRef = this.dialog.open(ModalHomeComponent, {
      width: '450px',
      data: { item : value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }




  // handlePage(e: PageEvent){
  //    this.page_size = e.pageSize
  //    this.page_number = e.pageIndex + 1
  //  }

  //  page_size: number =8;
  //  page_number: number = 1;
  //  pageSizeOptions  = [4, 8, 16, 24, 32, 40, 48 ,  80 , 100]

}
