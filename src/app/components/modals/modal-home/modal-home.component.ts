

import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface ProductProfileInterface {

}

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css']
})
export class ModalHomeComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ModalHomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductProfileInterface)
 {  }

  ngOnInit(): void {
  }




onNoClick(): void {
  this.dialogRef.close();
}


}
