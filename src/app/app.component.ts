import { AuthService } from './admin/auth/auth.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router) {}

  route(): boolean {
    if (this.router.url == '/constructing' || this.router.url == '/sandblasting') {
      return true;
    } else {
      if (this.router.url == '/reconstructing') {
        return true;
      } else {
        if (this.router.url == '/design') {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}
