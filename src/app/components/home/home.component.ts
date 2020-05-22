import { Component, OnInit } from '@angular/core';
//import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';
import { reduce } from 'rxjs/operators';
// import { DummyService } from '../../services/dummy.service';
import { ModalHomeComponent } from '../modals/modal-home/modal-home.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor( public dialog: MatDialog ) { }



  filterPost = '';
  public products = [];
  public product = '';
  dataProducts;

  ngOnInit(): void {
    // this.dataApi.getAllProducts().subscribe(products => {
    //   this.products = products;
    // });
    // this.getListProduct();


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
