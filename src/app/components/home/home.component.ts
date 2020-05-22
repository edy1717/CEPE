import { Component, OnInit } from '@angular/core';
//import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';
import { reduce } from 'rxjs/operators';
// import { DummyService } from '../../services/dummy.service';
import { ModalHomeComponent } from '../modals/modal-home/modal-home.component';
import { CultivoService } from '../../services/cultivo.service';
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


constructor( public dialog: MatDialog, private _cs :CultivoService ) { }



  filterPost = '';
  public products = [];
  public product = '';
  dataProducts;

  ngOnInit(): void {
    // this.dataApi.getAllProducts().subscribe(products => {
    //   this.products = products;
    // });
    // this.getListProduct();
    this.formMyProduct();
    this.consultarTodos();
  }


  formMyProduct(){
    this.formMyproduct = new FormGroup ({
      id : new FormControl (),
      nombre : new FormControl(),
      descripción : new FormControl(),
      imagen : new FormControl(),
      cantidad : new FormControl(),
      medida: new FormControl  ()
    })
  }

  consultarTodos(){
    this._cs.consultaCultivo(this.formMyproduct.value).subscribe((resp:any) => {
    this.registros = resp.resultados;
    console.log(this.registros);

    }, err => {
      console.error(err);
    });
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

  page_size: number =8;
  page_number: number = 1;
  pageSizeOptions  = [4, 8, 16, 24, 32, 40, 48 ,  80 , 100]

}
