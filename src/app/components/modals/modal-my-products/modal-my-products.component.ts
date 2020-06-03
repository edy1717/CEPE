
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FileReaderPromiseLikeService } from 'fctrlx-angular-file-reader';
import { CultivoService } from '../../../services/cultivo.service';


@Component({
  selector: 'app-modal-my-products',
  templateUrl: './modal-my-products.component.html',
  styleUrls: ['./modal-my-products.component.css']
})
export class ModalMyProductsComponent implements OnInit {

  formActualizarProductClient : FormGroup;
  archivos: any;
  imag
  imageError: string;


  constructor( private promiseService: FileReaderPromiseLikeService, private _sc : CultivoService ) { }

  ngOnInit(): void {
    this.formActProClient();

  }


  formActProClient(){
    this.formActualizarProductClient = new FormGroup ({
      idProCli : new FormControl (),
      nombre: new FormControl (),
      descripcion : new FormControl (),
      cantidad : new FormControl (),
      medida : new FormControl (),
      imagen:new FormControl(),
    })
  }

  onFileSelected(event: any) 
  {
    const file = event.target.files[0] ? event.target.files[0] : false;
    const max_size = 20971520;
    if (event.target.files[0].size > max_size) {
     this.imageError =
         'Maximum size allowed is ' + max_size / 1000 + 'Mb';
 
     return false;
 }
      if(file) 
      {
        this.promiseService.toBase64(file).then((result) => {
         const image = result.split(',')[1];
         let imageb64 = image.slice(4)
         this.formActualizarProductClient.get('imagen').setValue(imageb64)
        });
      }
  }
 

  save(){
    console.log(this.formActualizarProductClient)
  }

}
