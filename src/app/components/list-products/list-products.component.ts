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
      titulo : new FormControl(Validators.required),
      descripción : new FormControl(Validators.required),
      imagen : new FormControl(Validators.required),
      cantidad : new FormControl(Validators.required),
      medida: new FormControl  (Validators.required)
    });
  }

  openDialog(value){
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '450px',
      data: { id : value }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result){
        return;
      }
      value = result
      this.consultar();
    });
  }

  consultar(){
    this._sc.consultarTodosCultivos().subscribe (data => {
      this.respuesta = data;
      this.resultados = this.respuesta.data;
    });
  }

  obtenerCultivoId(data){
    this.cultivo = data
  }

  elimina(id:string) {
    const confirmacion = confirm('Estas seguro de eliminar el producto');
    if(confirmacion){
      this._sc.eliminarCultivo(id).subscribe(data => {
      this.consultar();
});
    }
    this.formmyPoduct.reset()
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]
}
