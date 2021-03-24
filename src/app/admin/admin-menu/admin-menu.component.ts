import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
