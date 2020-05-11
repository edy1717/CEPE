import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import Swal from 'sweetalert2';
import { Button } from 'protractor';
import { reduce } from 'rxjs/operators';

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
      title: '<strong>Te interesa?</strong>',
      html: 'Para contactar <b> descarga la aplicación. </b> ' + '<br>' +
      '<a href="https://play.google.com/store/apps?hl=es_MX" ><img src="https://i.pinimg.com/236x/37/18/ff/3718ffe54260f2cb2af297a08b41cc1d.jpg" width="26px" height="26px"></a>'+
      '<a href="https://www.apple.com/la/ios/app-store/" style="margin-left:12px;"><img src="https://pickaso.com/wp-content/uploads/2016/10/apple-app-store.png" width="26px" height="26px"></a>',
      background: 'rgba(255, 255, 255, 0.7)',

    });

  }

}
