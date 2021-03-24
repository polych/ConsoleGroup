import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Example, DataService } from 'src/app/core/data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  count: number;

  portfolio: Observable<Example[]>;

  constructor(
    private data: DataService
  ) {
    this.count = 2;
  }

  ngOnInit(): void {
    this.portfolio = this.data.getPortfolio();

  }

  showMore() {
    this.count++;
  }

}
