import { Injectable } from '@angular/core';
import { publication } from '../interfaces/publication';

@Injectable({
  providedIn: 'root'
})
export class DummyImagesService {

  publicimag : publication [] = [
    {
      idImage: 12,
      image: '../../../assets/img/logo/logo.png'
    },    {
      idImage: 13,
      image: '../../../assets/img/ima1.jpg'
    },
    {
      idImage: 14,
      image: '../../../assets/img/ima2.jpg'
    },
    {
      idImage: 15,
      image: '../../../assets/img/uva.jpg'
    },
    {
      idImage: 16,
      image: '../../../assets/img/logo/logo.png'
    },    {
      idImage: 17,
      image: '../../../assets/img/logo/logo.png'
    },
    {
      idImage: 18,
      image: '../../../assets/img/logo/logo.png'
    },    {
      idImage: 19,
      image: '../../../assets/img/logo/logo.png'
    },
    {
      idImage: 20,
      image: '../../../assets/img/logo/logo.png'
    },
    {
      idImage: 12,
      image: '../../../assets/img/logo/logo.png'
    },
  ]

  constructor() { }

  consultaImagen(){
    return this.publicimag;
  }
}
