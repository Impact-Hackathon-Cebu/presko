import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,

} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";
import { firestore } from 'firebase';

export interface User {
  id?: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;
  private user: User;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>("users");
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUser(id: string): Observable<User> {
    return this.userCollection.doc<User>(id).valueChanges().pipe(
      map(user => {
        user.id = id;
        return user;
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.users;
  }
}