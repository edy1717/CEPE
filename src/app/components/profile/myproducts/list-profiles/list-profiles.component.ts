import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../../../services/dummy.service';
import { Profiles } from '../../../../interfaces/profiles';
import { Router } from '@angular/router';

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

}
