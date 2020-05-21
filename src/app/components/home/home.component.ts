import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';
import { reduce } from 'rxjs/operators';
import { DummyService } from '../../services/dummy.service';
import { ModalHomeComponent } from '../modals/modal-home/modal-home.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor( private dataApi: DataApiService, private dummyService: DummyService, public dialog: MatDialog ) { }

  filterPost = '';
  public products = [];
  public product = '';
  dataProducts;

  ngOnInit(): void {
    this.dataApi.getAllProducts().subscribe(products => {
      this.products = products;
    });
    this.getListProduct();
  }

  getListProduct(){
    this.dataProducts = this.dummyService.consultaProducto();
  }

  alertProduct(){
    Swal.fire({
      title: '<strong>Te interesa?</strong>',
      html: 'Para contactar <b> descarga la aplicación. </b> ' + '<br>' +
      '<a href="https://play.google.com/store/apps?hl=es_MX" ><img src="https://i.pinimg.com/236x/37/18/ff/3718ffe54260f2cb2af297a08b41cc1d.jpg" width="26px" height="26px"></a>'+
      '<a href="https://www.apple.com/la/ios/app-store/" style="margin-left:12px;"><img src="https://pickaso.com/wp-content/uploads/2016/10/apple-app-store.png" width="26px" height="26px"></a>',
      background: 'rgba(255, 255, 255, 0.7)',

    });
  }

  // openDialog():void{
  //   const dialogRef = this.dialog.open(ModalHomeComponent, {
  //     width: '450px',
  //     data: {  nombre : this.nombre }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed' , this.nombre);
  //     this.nombre = result;
  //   });

//  }




  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number =8;
  page_number: number = 1;
  pageSizeOptions  = [4, 8, 16, 24, 32, 40, 48 ,  80 , 100]

}
