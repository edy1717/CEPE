import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };


@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  url = environment.apiUrl + '/cultivo';

  constructor( private http: HttpClient) {}
  registerCultivo(data){
    return this.http.post(this.url + '/registar', data);
  }
  // x id
  consultaCultivo(data){
    return this.http.post(this.url + '/buscar', data, httpOptions);
  }
  
  consultarTodosCultivos(){
    return this.http.get(this.url + '/obtener/todos');
  }

  editarCultivo(data){
     return this.http.post(this.url + '/editar', data, httpOptions);
  }

  eliminarCultivo(id){
     console.log(id);
     return this.http.post(this.url + '/eliminar', id, httpOptions);
}
}



