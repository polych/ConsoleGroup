import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Example, DataService } from 'src/app/core/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {

  public project: Example;

  constructor(

    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataService.getProject(params.get('id'));
    });
    this.dataService.projectDocument.valueChanges().subscribe(data => this.project = data);
  }
}
