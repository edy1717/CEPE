import { Component, OnInit } from '@angular/core';
import { ProductProfileInterface } from 'src/app/interfaces/products-profile';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { CultivoService } from '../../../services/cultivo.service';
import { UsuarioService } from '../../../services/usuario.service';
import {ModalMyProductsComponent} from '../../modals/modal-my-products/modal-my-products.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {

  formMyproduct: FormGroup;
  resultados;
  usua: any={};
  dat;
  myProducts: any;
  filterPost = '';
  headElements = [ '#', 'Nombre', 'Descripcion', 'Imagen', 'Cantidad', 'Medida']
  id: any;
  envio ;
  resul:any;

  constructor(private activatedRoute: ActivatedRoute,
              private _cs: CultivoService,
              private _us: UsuarioService, public dialog: MatDialog ) { }

   formMyProduct(){
     this.formMyproduct = new FormGroup ({
       id : new FormControl (),
       titulo : new FormControl(),
       descripción : new FormControl(),
       imagen : new FormControl(),
       cantidad : new FormControl(),
       medida: new FormControl  ()
     });
   }

  ngOnInit(): void {
    this.formMyProduct();
    this.consultar();

  }
  openDialog(value){
    const dialogRef = this.dialog.open(ModalMyProductsComponent, {
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
     this.activatedRoute.params.subscribe (params => {
      if(params.usuarioCreador != null){
        this._cs.consultaCultivo(params).subscribe(datacult => {
        this.myProducts = datacult['data'];
        });
        this._us.consultUserId(params.usuarioCreador).subscribe(dataus=>{
        this.usua = dataus['data'];
        });
      }
    });
}

  elimina(id:string) {
    const confirmacion = confirm('Estas seguro de eliminar el producto');
      if(confirmacion){
        this._cs.eliminarCultivo(id).subscribe(data => {
        this.consultar();
})
  }
  this.formMyproduct.reset()
}

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions  = [5, 10, 15, 20, 25, 30, 40, 80 , 100]

}
