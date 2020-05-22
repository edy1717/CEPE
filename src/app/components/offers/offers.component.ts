import { Component, OnInit } from '@angular/core';
import { DummyImagesService } from '../../services/dummy-images.service';
import { OffersService } from '../../services/offers.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: any[];
  formMyoffers : FormGroup;

imagenes;

  constructor( private offerServ: OffersService) { }

  ngOnInit(): void {


    this.formMyOffers();
    this.consultarTodos();

  }

  formMyOffers(){
    this.formMyoffers = new FormGroup ({
      id : new FormControl (),
      contenido: new FormControl  ()
    });
  }

  consultarTodos(){
    this.offerServ.consultarPosts(this.formMyoffers.value).subscribe((resp:any) => {
    this.offers = resp.resultados;
    console.log(this.offers);

    }, err => {
      console.error(err);
    });
  }


  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]
}
