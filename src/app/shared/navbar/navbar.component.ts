import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../interfaces/user';
import { Router } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active = 1;
  public isLogged : Boolean = false;


  constructor( private authService : AuthService,
                 private router:Router ) { }

  public app_name: string = 'Sembrando Conciencia';


  user : UserInterface = {
    name : '',
    email : '',
    photoURL : ''
  };

  ngOnInit(): void {
    //this.getCurrentUser();
    // this.authService.isAuth().subscribe(user =>  {
    //   if(user){
    //     this.user.name = user.displayName;
    //     this.user.email = user.email
    //   }
    // })
  }

  // getCurrentUser() {
  //   this.authService.onlogin().subscribe(auth => {
  //     if (auth) {
  //       console.log('user logged');
  //       this.isLogged = true;
  //     } else {
  //       console.log('NOT user logged');
  //       this.isLogged = false;
  //     }
  //   });
  // }

  onLogout() {
    localStorage.removeItem('SCtoken');
    this.router.navigateByUrl('/home');
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }


}
