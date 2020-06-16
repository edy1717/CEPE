import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id: any;
  verinicio: boolean = false;
  verperfil: boolean = false;
  active = 1;
  public isLogged = true;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('idusu');
    if (this.id != null) {
      this.verperfil = true;
    }
    if (this.id === null) {
      this.verinicio = true;
    }
  }
  inciasesion() {
    this.router.navigate(['/user/login'])
  }

  onLogout() {
    localStorage.removeItem('SCtoken');
    localStorage.removeItem('idusu');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/home'])
    // .then(dato=>{
      location.reload()
    // });
   
  }
}
