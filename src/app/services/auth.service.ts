import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl + '/auth';


  constructor( private http: HttpClient  ) {

  }
    onlogin(data){
      return this.http.post(this.url + '/login', data);
    }

    setToken(token): void
    {
      localStorage.setItem('accessToken', token);
    }
  getToken()
    {
      return localStorage.getItem('accessToken');
    }

}
