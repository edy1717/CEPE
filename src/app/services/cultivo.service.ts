import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ProductInterface } from '../interfaces/products';
import {Observable} from 'rxjs/internal/observable';
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
  product:Observable<any>;
  products:Observable<any>;



  public selectProduct: ProductInterface = {
    id: null,
    nombre: '',
    descripcion: '',
    portada: '',
    cantidad: '',
    medida:'',

};

  constructor( private http: HttpClient, private authService: AuthService ) {
    console.log('Holi',httpOptions);

  }

  registerCultivo(data){
    return this.http.post(this.url+'/registar', data);
  }

  //id
  consultaCultivo(){
  const token = this.authService.getToken();
   let data = {id:5};
    return this.http.post(this.url+'/obtener',data, httpOptions);
  }

  consultarTodosCultivos(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
  }

  editarCultivo(data){
   const productId = data.productId;
   const token = this.authService.getToken();
   const urlProd = `http://34.94.150.226/cultivo/editar/${productId}/?access_token=${token}`;
   return this.http
     .put<ProductInterface>(urlProd,data)
     .pipe(map(dat => dat ));

    // return this.http.post(this.url+'/editar', data);
  }

  eliminarCultivo(id:String){
    const token = this.authService.getToken();
    console.log(token);
    const urlProd = `http://34.94.150.226/cultivo/eliminar/${id}/?access_toke=${token}`;
   return this.http
     .delete<ProductInterface>(urlProd)
     .pipe(map(dat => dat ));

    // return this.http.delete(this.url+'/eliminar');
  }

}
