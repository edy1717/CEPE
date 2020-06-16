import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" ,
Authorization: 'Bearer ' + localStorage.getItem('SCtoken') }) };


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  url = environment.apiUrl + '/reporte';

  constructor(private http: HttpClient) { }

  reportUser(data){
    return this.http.post(this.url + '/buscar', data);
  }

  consultarReport(){
    return this.http.get(this.url + '/obtener/todos', httpOptions);
  }

  enviarReporte(data){
    return this.http.post(this.url + '/enviar', data, httpOptions)
  }

  eliminarReport(data){
    return this.http.post(this.url + '/eliminar', data, httpOptions);

  }
}
