import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../services/offers.service';
import { ModalOffersComponent } from '../modals/modal-offers/modal-offers.component';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  registros: any[];
  formmyPoduct : FormGroup;
  resultados;
  respuesta;

  constructor( private offerServ: OffersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.consultar();
    this.formMyProduct();


    // this.consultarId();
  }

  formMyProduct(){
    this.formmyPoduct = new FormGroup ({
      id : new FormControl (''),
      contenido: new FormControl  ('')
    })
  }

  // consultarId(){
  //  this.offerServ.consultarTodosPost()
  //  .subscribe((productos: any) =>{
  //    console.log(productos);
  //   });
  // }

  consultar(){
    this.offerServ.consultarTodosPost().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data
      console.log('pp', this.resultados)
  });
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalOffersComponent, {
      width: '450px',
      data: { item : value }
    });
    dialogRef.afterClosed().subscribe(result => {
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
