import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CultivoService } from '../../services/cultivo.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modals/modal/modal.component';
import { User } from 'firebase';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  formmyPoduct : FormGroup;
  headElements = ['#','Nombre','Descripción','Imagen', 'Cantidad','Medida' ];
  respuesta;
  resultados;
  resul;
  filterPost = '';
  cultivo;
  respBack;
 

  constructor( private _sc: CultivoService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.formMyProduct();
    this.consultar();

  }


  formMyProduct(){
    this.formmyPoduct = new FormGroup ({
      id : new FormControl (''),
      titulo : new FormControl(''),
      descripción : new FormControl(''),
      imagen : new FormControl(''),
      cantidad : new FormControl(''),
      medida: new FormControl  ('')
    });
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: { id : value }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  consultar(){
    this._sc.consultarTodosCultivos().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data;
       console.log('pp', this.resultados)
    });
  }

  obtenerCultivoId(data){
    this.cultivo = data
    console.log(this.cultivo);
  }

  elimina(id:string) {
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
      this._sc.eliminarCultivo(id).subscribe(data => {
      this.consultar();
})
    }
    this.formmyPoduct.reset()
  }

// elimina(id){
//     this._sc.eliminarCultivo(id).subscribe(data => {
//     this.consultar();
//  }); 
//  this.formmyPoduct.reset()
//  }



  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
