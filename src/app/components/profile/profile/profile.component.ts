import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../interfaces/user';
import {
    ModalUserprofileComponent
} from '../../modals/modal-userprofile/modal-userprofile.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private authService : AuthService , public dialog: MatDialog, private router:Router) { }

  public providerId : string = 'null';
  formMyproduct : FormGroup;


  user : UserInterface = {
    name : '',
    email : '',
    photoURL : ''
  };

  ngOnInit(): void {
    // this.authService.isAuth().subscribe(user =>  {
    //   if(user){
    //     this.user.name = user.displayName;
    //     this.user.email = user.email
    //     this.user.photoURL = user.photoURL
    //     this.providerId = user.providerData[0].providerId;
    //   }
    // })
    this.formMyProduct();
  }


  formMyProduct(){
    this.formMyproduct = new FormGroup ({
      nombre : new FormControl (),
      Apepat : new FormControl(),
      Apemat : new FormControl(),
      email : new FormControl(),
      contra : new FormControl()
    })
  }

  openDialog(valor){
    const dialogRef = this.dialog.open(ModalUserprofileComponent, {
      width: '450px',
      data: { item : valor }
    });
    dialogRef.afterClosed().subscribe(result => {
    });

  }

  // Rutas
  rutProd(){
    this.router.navigate(['admin/list-products']);
  }
  rutPerfiles(){
    this.router.navigate(['admin/list-profiles']);
  }
  rutPost(){
    this.router.navigate(['admin/offers']);
  }
  rutReport(){
    this.router.navigate(['admin/reports']);
  }
}
