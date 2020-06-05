import { ModalAvisoComponent } from '../../components/modals/modal-aviso/modal-aviso.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef = this.dialog.open(ModalAvisoComponent, {
      width: '450px',

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
