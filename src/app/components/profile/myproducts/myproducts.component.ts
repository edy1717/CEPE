import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/interfaces/products-profile';
import { DummyService } from '../../../services/dummy.service';
import { ActivatedRoute } from '@angular/router';
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



}
