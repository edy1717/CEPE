import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductInterface } from '../interfaces/products';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };


@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  url = environment.apiUrl + '/cultivo';

  public selectProduct: ProductInterface = {
    id: null,
    nombre: '',
    descripcion: '',
    portada: '',
    cantidad: '',
    medida:'',
};

  constructor( private http: HttpClient, private authService: AuthService ) {

  }

  registerCultivo(data){
    return this.http.post(this.url+'/registar', data);
  }
  //id
  consultaCultivo(data){
  const token = this.authService.getToken();
  console.log('como recibe el servicio', data);
    return this.http.post(this.url+'/buscar',data,httpOptions);
  }

  consultarTodosCultivos(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
  }

  editarCultivo(data){
     return this.http.post(this.url+'/editar', data, httpOptions);
  }

  eliminarCultivo(id){
  console.log(id);
     return this.http.post(this.url+'/eliminar',id, httpOptions);
}
}
