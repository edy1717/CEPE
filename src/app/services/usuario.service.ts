import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl+'usuario';

  constructor( private http: HttpClient ) { }

  onlogin(data){
    return this.http.post(this.url+'/registrar', data);
  }
}
