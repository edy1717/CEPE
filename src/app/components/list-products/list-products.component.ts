import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CultivoService } from '../../services/cultivo.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modals/modal/modal.component';


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
  data:any;
  filterPost = '';

  constructor( public dialog: MatDialog, private _sc : CultivoService) { }

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



  consultar(){
    this._sc.consultarTodosCultivos().subscribe (data => {
      this.respuesta = data ;
      this.resultados = this.respuesta.resultados
      console.log('esto es data', data)
      console.log('resu', this.resultados)
  })
  }

  elimina(id){

     this._sc.eliminarCultivo(id).subscribe(data => {
       console.log('Eliminado');
       this.consultar();

  });
  }
  // onDeleteProducts(i : string):void{
  //   const confirmacion = confirm('Estas seguro de eliminar el producto');
  //   if(confirmacion){
  //   this.dataProducts.splice(i, 1)
  //   }
  // }
  actualizarCultivo(){
    this._sc.editarCultivo(this.formmyPoduct.value).subscribe ( respEditar => {
      this.respuesta = respEditar
      console.log('editar', this.respuesta)
      console.log('editar1', respEditar)
    })
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalComponent, {
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
