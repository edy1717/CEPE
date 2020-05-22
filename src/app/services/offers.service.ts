import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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

  consultarPosts(data){
    return this.http.post(this.url + '/obtener/todos', data);
  }
}
