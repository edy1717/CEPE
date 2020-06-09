import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService,
    private router: Router) { }

  public app_name: string = 'Sembrando Conciencia';



  ngOnInit(): void {
    // this.onCheckUser();
    this.id = localStorage.getItem('idusu');
    console.log(this.id);
    if (this.id != null) {
      this.verperfil = true;
    }
    if (this.id === null) {
      this.verinicio = true;
    }
  }
  inciasesion() {
    this.router.navigate(['/user/login']);
  }

  onLogout() {
    localStorage.removeItem('SCtoken');
    localStorage.removeItem('idusu');
    this.router.navigateByUrl('/home');
    location.reload();
  }

  // onCheckUser(): void {
  //   if (this._us.getCurrentUser() === this.isLogged ) {
  //     this.isLogged = false;
  //   } else {
  //     this.isLogged = true;
  //   }
  // }

}
