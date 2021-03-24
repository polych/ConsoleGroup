import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });

  }

  async login(email: string, password: string) {

    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }
  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
