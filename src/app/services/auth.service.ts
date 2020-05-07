import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afsAuth : AngularFireAuth ) { }

  registerUser() {}

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }
  
  loginFacebookUser() {
    return this.afsAuth.signInWithPopup(new auth.FacebookAuthProvider)
  }
  
  loginGoogleUser() {
    return this.afsAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logoutUser() {
    return this.afsAuth.signOut();
  }

  isAuth(){
    return this.afsAuth.authState.pipe( map ( auth=>auth ));
  }

}
