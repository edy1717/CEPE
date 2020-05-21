import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/interfaces/products-profile';
import { DummyService } from '../../../services/dummy.service';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  myProducts : any =  [];
  filterPost = '';

  constructor(private activatedRoute: ActivatedRoute, private dummyService: DummyService ) {
    this.activatedRoute.params.subscribe (params => {
      if(params.idProfile != null){
        this.myProducts = this.dummyService.productoProfiles(params['idProfile']);
      }
    });
   }

  ngOnInit(): void {

  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]


}
