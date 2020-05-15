import { Component, OnInit } from '@angular/core';
import { DummyImagesService } from '../../services/dummy-images.service';

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
}
