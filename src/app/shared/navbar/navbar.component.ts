import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../interfaces/user';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService : AuthService,
                private afsAuth : AngularFireAuth ) { }

  public app_name: string = 'Sembrando Conciencia';

  public isLogged : Boolean = false;

  user : UserInterface = {
    name : '',
    email : '',
    photoURL : ''
  };

  ngOnInit(): void {
    this.getCurrentUser();
    this.authService.isAuth().subscribe(user =>  {
      if(user){
        this.user.name = user.displayName;
        this.user.email = user.email
        this.user.photoURL = user.photoURL
      }
    })
  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }

  onLogout() {
    this.afsAuth.signOut();
  }

  
}
