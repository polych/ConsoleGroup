import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.scss']
})
export class AdminUiComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
