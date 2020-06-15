import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  resultado;
  respuesta
  hide = true;
  private formSubmitAttempt: boolean;

  constructor(  private router : Router, private usService : AuthService, private _us : UsuarioService ) { }

  ngOnInit() {
    this.crearFormulario();
    this.onLoginCorreo()
  }

  crearFormulario() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
     
    });
  }

  onLoginCorreo(){
    this.usService.onlogin(this.formLogin.value).subscribe ( resp => {
      this.resultado = resp;
      if( this.resultado.data.isAdmin === true){
        localStorage.setItem('idusu',this.resultado.data.id);
        localStorage.setItem('SCtoken', this.resultado.data.token);
        localStorage.setItem('isAdmin', this.resultado.data.isAdmin);
        this.router.navigateByUrl('/user/profile').then(dato=>{
          location.reload()
         });
      }else{
        if( this.resultado.data.isAdmin === false){
          Swal.fire({
            icon: 'error',
            title: 'Lo siento no eres administrador!!!',
          });
        }
      }
    });
  }
}
