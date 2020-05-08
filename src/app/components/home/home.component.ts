import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataApi: DataApiService ) { }

  filterPost = '';
  public products = [];
  public product = '';

  ngOnInit(): void {
    this.dataApi.getAllProducts().subscribe(products => {
      console.log('Producto', products);
      this.products = products;
    });

  }

  alertProduct(){
    Swal.fire({
      title: '¿Te interesa?',
      text: `Para ello descarga la APP`,

    });

  }

}