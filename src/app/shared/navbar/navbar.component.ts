import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(   private router:Router, private  _us : AuthService) { }
  
  public isLogged = false;

  ngOnInit(){
    this.onCheckUser()
  }

  onCheckUser(): void {
    if (this._us.getCurrentUser() === this.isLogged ) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  onLogout() {
    localStorage.removeItem('SCtoken');
    localStorage.removeItem('idusu');
    this.router.navigateByUrl('/user/login');
  }


}
