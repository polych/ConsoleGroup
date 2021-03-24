import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
export interface Picture {
  id: string; path: string;

}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  readonly DATA_URL = 'assets/MOCK_DATA.json';
  portfolioCollection: AngularFirestoreCollection<any>;
  projectDocument: AngularFirestoreDocument<any>;
  photoCollection: AngularFirestoreCollection<any>;
  drawCollection: AngularFirestoreCollection<any>;

  constructor(private http: HttpClient, private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.portfolioCollection = this.afs.collection('portfolio');
    this.photoCollection = this.afs.collection('photo');
    this.drawCollection = this.afs.collection('draw');

  }
  getExamples() {
    return this.http.get(this.DATA_URL);
  }
  getPortfolio(): Observable<any[]> {
    return this.portfolioCollection.snapshotChanges().pipe(
        map((actions) => actions.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
      );
  }
  getProject(id) {
    this.projectDocument = this.afs.doc<any>('portfolio/' + id);
    return this.projectDocument;
  }
  updateProject(project: UpdateExample) {
    this.projectDocument.update({
      title: project.title,
      image: project.image,
      adress: project.adress,
      data: project.content,
    });
  }
  deleteproject(id: string, url) {
    this.storage.storage.refFromURL(url).delete();
    return this.afs.doc<any>(`portfolio/${id}`).delete();
  }
  /// examples
  getPhotos(): Observable<Picture[]> {
    return this.photoCollection.snapshotChanges().pipe(
      map((actions) => actions.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
    );
  }
  getDraws(): Observable<Picture[]> {
    return this.drawCollection.snapshotChanges().pipe(
      map((actions) => actions.map((a) => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
    );
  }
  deletePicture(picture, col) {
    this.storage.storage.refFromURL(picture.path).delete();
    return this.afs.doc<any>(`${col}/${picture.id}`).delete();
  }


}

export class Example {
  id: number;
  image: string;
  title: string;
  adress: string;
  content: string;
}
interface UpdateExample {
  image: string;
  title: string;
  adress: string;
  content: string;
}

