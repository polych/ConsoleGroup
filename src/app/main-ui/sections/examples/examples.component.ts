import { Picture } from './../../../core/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService, Example } from 'src/app/core/data.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ExamplesComponent implements OnInit, OnDestroy {

  photos: Observable<Picture[]>;
  draws: Observable<Picture[]>;

  currentPhotoSlide = 0;
  currentDrawSlide = 0;


  constructor(
    private data: DataService
  ) {
    this.photos = this.data.getPhotos();
    this.draws = this.data.getDraws();
  }

  ngOnInit(): void {
    setInterval(() => this.onNextClickPhoto(), 5000);
    setInterval(() => this.onNextClickDraw(), 4000);

  }

  onPreviousClickPhoto() {
    const previous = this.currentPhotoSlide - 1;
    this.photos.subscribe(res => {
      this.currentPhotoSlide = previous < 0 ? res.length - 1 : previous;
    });
  }

  onNextClickPhoto() {
    const next = this.currentPhotoSlide + 1;
    this.photos.subscribe(res => {
      this.currentPhotoSlide = next === res.length ? 0 : next;
    });
  }



  onPreviousClickDraw() {
    const previous = this.currentDrawSlide - 1;
    this.draws.subscribe(res => {
      this.currentDrawSlide = previous < 0 ? res.length - 1 : previous;
    });
  }

  onNextClickDraw() {
    const next = this.currentDrawSlide + 1;
    this.draws.subscribe(res => {
      this.currentDrawSlide = next === res.length ? 0 : next;
    });
  }

  ngOnDestroy() {
    clearInterval();
  }
}

