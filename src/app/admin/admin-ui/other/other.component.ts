import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  private text;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
