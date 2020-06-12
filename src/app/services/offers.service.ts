import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  url = environment.apiUrl + '/post';

  constructor( private http: HttpClient  ) { }

  editarPost(id){
    return this.http.post(this.url + '/editar', id, httpOptions);
  }

  eliminarPost(id){
    console.log(id);
    return this.http.post(this.url + '/eliminar', id, httpOptions);

  }
// x id
  consultaPost(id){
    return this.http.post(this.url + '/obtener', id, httpOptions);
  }
  consultarTodosPost(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
  }
}
