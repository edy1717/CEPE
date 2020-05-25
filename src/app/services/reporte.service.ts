import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  url = environment.apiUrl + '/reporte';

  constructor(private http: HttpClient) { }

  reportUser(data){
    return this.http.post(this.url + '/buscar', data);
  }
}
