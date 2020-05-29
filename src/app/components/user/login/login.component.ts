import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  resultado;
  respuesta
  private formSubmitAttempt: boolean;

  constructor(  private router : Router,
                private usService : AuthService ) { }

  ngOnInit() {
    this.crearFormulario();
  }

  crearFormulario() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

/*
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
*/
  onLoginCorreo(){
    this.usService.onlogin(this.formLogin.value).subscribe ( resp => {
    this.resultado = resp;
    if (this.resultado.data.token != ''){
      localStorage.setItem('SCtoken', this.resultado.data.token);
      this.router.navigateByUrl('/home');

      console.log(localStorage.getItem('SCtoken'));
      console.log('res',resp)
      console.log('resi',this.resultado)

      }
    }),error => console.log('erros nemo',error)
  }



}

