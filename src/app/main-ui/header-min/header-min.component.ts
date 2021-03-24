import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-min',
  templateUrl: './header-min.component.html',
  styleUrls: ['./header-min.component.scss']
})
export class HeaderMinComponent implements OnInit {

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  clickScroll(elementId): void {
    this.router.navigate([''], { fragment: elementId });
    this.closeNav();
  }

  openNav() {
    document.getElementById('mySidenav').classList.toggle('open-nav', true);
  }

  closeNav() {
    document.getElementById('mySidenav').classList.toggle('open-nav', false);
  }
}
