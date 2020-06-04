import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { UserInterface } from '../interfaces/user';

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

getRefreshToken(){
    let token = localStorage.getItem('refreshToken');
    return token
}

setRefreshToken(refreshToken): void{
    localStorage.setItem('refreshToken',refreshToken);
}

refreshToken(){
      return this.http.post<any>(
        this.url + '/refreshToken',
        { 'refreshToken': this.getRefreshToken() }
      ).pipe(tap((tokens) => {
        let reToken = tokens.refreshtoken;
        this.setRefreshToken(reToken);
      }));
}

logout(){
      localStorage.removeItem('SCtoken');
  }

setToken(token): void{
      localStorage.setItem('SCtoken', token);
}
getToken(){
      return localStorage.getItem('SCtoken');
}
getCurrentUser(): UserInterface{
      let user_string = localStorage.getItem('currentUser');
      if(!isNullOrUndefined(user_string)){
        let user = JSON.parse(user_string)
        return user
      }else {
        return null;
      }
    }


}
