import { Observable } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-change-examples',
  templateUrl: './change-examples.component.html',
  styleUrls: ['./change-examples.component.scss']
})
export class ChangeExamplesComponent implements OnInit {

  public photos: Observable<any[]>;
  public draws: Observable<any[]>;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private data: DataService) { }

  ngOnInit(): void {
    this.photos = this.data.getPhotos();
    this.draws = this.data.getDraws();
  }

  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
  deletePicture(picture, col){
    this.data.deletePicture(picture, col);
  }

}


