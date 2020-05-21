import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyService } from '../../../services/dummy.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {

  constructor( private dummyService:DummyService,  private router:Router) { }

  dataProfiles;
  dataProducts;
  filterPost = '';

  ngOnInit(): void {
    this.getListProfile();
    this.getListProduct();
  }

  getListProfile(){

    this.dataProfiles = this.dummyService.consultaProfile();
  }

  getListProduct(){
    this.dataProducts = this.dummyService.consultaProducto();
  }
  Misproductos($a){
    this.router.navigate(['/admin/user-products', $a]);


  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
