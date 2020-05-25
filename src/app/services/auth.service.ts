import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl + '/auth';
  headers : HttpHeaders = new HttpHeaders({
    "Conten-type": "application.json"
  })


  constructor( private http: HttpClient  ) {

  }
    onlogin(data){
      return this.http.post(this.url + '/login', data, {headers : this.headers} )
      .pipe(map(data => data))
    }

    setToken(token): void
    {
      localStorage.setItem('accessToken', token);
    }
  getToken()
    {
      return localStorage.getItem('accessToken');
    }

    getCurrentUser(){
      let user_string = localStorage.getItem('currentUser');
      if(!isNullOrUndefined(user_string)){
        let user = JSON.parse(user_string)
        return user
      }else {
        return null;
      }
    }
   

}
