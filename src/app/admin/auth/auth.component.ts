import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['']);
    }

  }

}
