import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  resultado;

  url = environment.apiUrl + '/usuario';

  constructor( private http: HttpClient ) { }

  registerUser(data){
    return this.http.post(this.url+'/registrar', data)
  }

  consultUsers(data){
    return this.http.post(this.url+'/obtener/todos', data)
  }

  deleteUser(data){
    return this.http.post(this.url+'/', data)
  }


}
