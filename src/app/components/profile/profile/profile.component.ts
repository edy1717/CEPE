import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private authService : AuthService ) { }

  public providerId : string = 'null';

  user : UserInterface = {
    name : '',
    email : '',
    photoURL : ''
  };

  ngOnInit(): void {
    // this.authService.isAuth().subscribe(user =>  {
    //   if(user){
    //     this.user.name = user.displayName;
    //     this.user.email = user.email
    //     this.user.photoURL = user.photoURL
    //     this.providerId = user.providerData[0].providerId;
    //   }
    // })
  }

}
