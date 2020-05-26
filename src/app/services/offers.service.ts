import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  url = environment.apiUrl + '/post';

  constructor( private http: HttpClient  ) { }

  editarPost(data){
    return this.http.post(this.url + '/editar', data);
  }

  eliminarPost(){
    return this.http.delete(this.url + '/eliminar');
  }


  consultarTodosPost(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
  }
}
