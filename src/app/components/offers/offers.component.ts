import { Component, OnInit } from '@angular/core';
import { DummyImagesService } from '../../services/dummy-images.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

imagenes;

  constructor(private dummyImagen: DummyImagesService) { }

  ngOnInit(): void {
    this.verImagen()
  }

  verImagen(){
    this.imagenes = this.dummyImagen.consultaImagen();
    console.log('img', this.imagenes)
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]
}
