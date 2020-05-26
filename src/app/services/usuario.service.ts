import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  resultado;

  url = environment.apiUrl + '/usuario';

  constructor( private http: HttpClient, private authService: AuthService  ) { }

  registerUser(data){
    return this.http.post(this.url+'/registrar', data)
  }

  consultUsers(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
    }

  deleteUser(data){
    return this.http.post(this.url+'/', data)
  }


}
