import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/models/products-profile';
import { DummyService } from '../../../services/dummy.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  misproductos:any=[];

  constructor(private activatedRoute: ActivatedRoute,  private dummyService: DummyService ) {

    this.activatedRoute.params.subscribe( params => {
       if (params.idProfile != null){
           this.misproductos =   this.dummyService.productosProfiles(params['idProfile']);
          console.log(this.misproductos);
       }
    });

  }


  ngOnInit(): void {

  }


}
