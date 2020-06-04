import { OffersService } from '../../../services/offers.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-offers',
  templateUrl: './modal-offers.component.html',
  styleUrls: ['./modal-offers.component.css']
})
export class ModalOffersComponent implements OnInit {

  formPosts: FormGroup;
  dataPost;
  respuesta;
  respBack;

  constructor(private _postServ: OffersService, public dialogRef: MatDialogRef<ModalOffersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.formPost();
    this.getListPost();
    this.dataPost = this.data;
    console.log(this.data.id.id);
    this.formPosts.get('id').patchValue(this.data.id.id);
    this.formPosts.get('contenido').patchValue(this.data.id.contenido);
}

  formPost(){
    this.formPosts = new FormGroup({
        id: new FormControl ({value: '', disabled: true}),
        contenido: new FormControl(null)
    });
  }

  getListPost(){
    this.dataPost = this._postServ.consultaPost(this.dataPost);
  }

  guardarActPost(){
    this._postServ.editarPost(this.formPosts.value)
    .subscribe (respBack => {
      this.respuesta = respBack;
    });
    console.log('form',this.formPosts.value)

    this.getListPost();
   }

   cerrarModal(){
    this.dialogRef.close();
   }
}
