import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalHomeComponent } from '../modals/modal-home/modal-home.component';
import { CultivoService } from '../../services/cultivo.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 formmyPoduct : FormGroup;
 resultados;
 respuesta;
 filterPost = '';

constructor( public dialog: MatDialog, private _cs: CultivoService) {
 }

  ngOnInit(): void {
    this.consultar();
    this.formMyProduct();
  }

  formMyProduct(){
    this.formmyPoduct = new FormGroup ({
      id : new FormControl (''),
      nombre : new FormControl(''),
      descripción : new FormControl(''),
      imagen : new FormControl(''),
      cantidad : new FormControl(''),
      medida: new FormControl  ('')
    })
  }



  consultar(){
    this._cs.consultarTodosCultivos().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data
      console.log('pp', this.resultados)
  })
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalHomeComponent, {
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
