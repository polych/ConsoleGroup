import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
