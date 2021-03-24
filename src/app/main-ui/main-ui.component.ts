import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../admin/auth/auth.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    ) {
  }
  ngOnInit(): void {
  }

}
