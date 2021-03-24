import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Example, DataService } from 'src/app/core/data.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as uuid from 'uuid';


@Component({
  selector: 'app-change-portfolio',
  templateUrl: './change-portfolio.component.html',
  styleUrls: ['./change-portfolio.component.scss']
})
export class ChangePortfolioComponent implements OnInit {

  @ViewChild('file') projectPhoto: ElementRef;

  public portfolio: Observable<Example[]>;

  public projectForm: FormGroup;
  private project: Example;
  private image: string;
  private event: any;

  private imagePath;
  public imgURL: any;

  private downloadURL: Observable<string>;
  private projectCollection: AngularFirestoreCollection<Example>;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private dataService: DataService,

  ) { }

  ngOnInit(): void {

    this.portfolio = this.dataService.getPortfolio();

    this.projectCollection = this.afs.collection<Example>('portfolio/');

    this.projectForm = this.fb.group({
      title: new FormControl('', Validators.required),
      adress: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });


    this.projectForm.valueChanges.subscribe(inputData => {
      this.project.title = this.projectForm.controls.title.value;
      this.project.image = this.image;
      this.project.adress = this.projectForm.controls.adress.value;
      this.project.content = this.projectForm.controls.content.value;
    });
  }


  uploadImage(event, files) {
    this.event = event;
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.imgURL = reader.result;
    };
  }

  async onSubmit() {
    // перевірка на наявність картинки
    if (this.projectForm.valid) {
      if (this.event == null) {
        return alert('Картинка відсутня!');
      }

      const file = this.event.target.files[0];
      const filePath = `portfolio/${file.name}`;
      if (file.type.split('/')[0] !== 'image') {
        return alert('Тільки картинки!');
      } else {
        const task = this.storage.upload(filePath, file);
        const fileRef = this.storage.ref(filePath);
        task.then(tsk => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            this.image = url;
            this.project = this.prepareSaveProject();
            this.projectCollection.add(this.project);
            this.projectForm.reset();
            this.imgURL = null;
            this.event = null;
            this.projectPhoto.nativeElement.value = null;
            alert('Успішно надіслано!');

          });
        }
        );

      }
    } else {
      return alert('Заповніть всі поля!');
    }

  }


  prepareSaveProject(): Example {
    const formModel = this.projectForm.value;
    formModel.image = this.image;
    return { ...formModel };
  }

  updateProject(id: string) {
    this.router.navigate(['post-change', id]);
  }

  deleteProject(id: string, url) {
    this.dataService.deleteproject(id, url);
  }
}


