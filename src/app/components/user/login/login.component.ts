import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public afAuth : AngularFireAuth, 
                private router : Router,
                private authService : AuthService,
                private usService : UsuarioService ) { }

    public email: string = '';
    public password: string = '';

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
    this.router.navigate(['home']);
    }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle():void{
    this.authService.loginGoogleUser()
    .then( (resp) => {
    this.router.navigate(['home']);
    }).catch(err => console.log('err', err.message ));
  }

  onLoginFacebook():void{
    this.authService.loginFacebookUser()
    .then( (resp) => {
    this.router.navigate(['home']);
    }).catch (err => console.log('err', err.message));
  }

  onLogout():void{
    this.authService.logoutUser();
  }

  onLoginCorreo(){
    this.usService.onlogin(this.usService).subscribe ( resp => {
      console.log(this.usService) 
    })
  }

}
