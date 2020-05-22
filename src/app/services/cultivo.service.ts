import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  url = environment.apiUrl + '/cultivo';

  constructor( private http: HttpClient  ) { }

  registerCultivo(data){
    return this.http.post(this.url+'/registar', data)
  }

  consultaCultivo(data){
    return this.http.get(this.url+'/obtener/todos', data)
  }

  editarCultivo(data){
    return this.http.post(this.url+'/editar', data)
  }

  eliminarCultivo(){
    return this.http.delete(this.url+'/eliminar')
  }

}
