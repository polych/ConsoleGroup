import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'upload-task',
  template: ``
})
export class UploadTaskComponent implements OnInit {

  @Input() file: File;
  @Input() collection: string;


  task: AngularFireUploadTask;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `${this.collection}/${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, this.file);
    this.task.then(() => {
      ref.getDownloadURL()
        .subscribe(url => {
          this.db.collection(`${this.collection}`).add({ path: url});
        });
    });
  }


}
