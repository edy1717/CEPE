import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(){
    if (localStorage.getItem('SCtoken')){
      console.log('Entró al if');
      return true;
    }
    else{
      console.log('Entró al else');
      return false;


    }
  }
}
