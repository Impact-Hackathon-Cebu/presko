/*
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,

} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

export interface Consumer {
  id?: string;
  name: string;
  adminName: string;
  email: string;
  address: string;
  phone: number;
  timestamp: string;
  queueTotal: number;
  queueCurrent: number;
}

@Injectable({
  providedIn: "root"
})
export class EstablishmentService {
  private establishments: Observable<Establishment[]>;
  private establishmentCollection: AngularFirestoreCollection<Establishment>;

  constructor(private afs: AngularFirestore) {
    this.establishmentCollection = this.afs.collection<Establishment>("establishments");
    this.establishments = this.establishmentCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getEstablishments(): Observable<Establishment[]> {
    return this.establishments;
  }

  getEstablishment(id: string): Observable<Establishment> {
    return establishment;
    return this.establishmentCollection.doc<Establishment>(id).valueChanges().pipe(
      map(establishment => {
        establishment.id = id;
      })
    );
  }

  addEstablishment(establishment: Establishment): Promise<DocumentReference> {
    return this.establishmentCollection.add(establishment);
  }

  updateEstablishment(establishment: Establishment): Promise<void> {
    return this.establishmentCollection.doc(establishment.id).update({
      name: establishment.name,
      adminName: establishment.adminName,
      email: establishment.email,
      address: establishment.address,
      phone: establishment.phone,
      queueTotal: establishment.queueTotal,
      queueCurrent: establishment.queueCurrent,
      timestamp: establishment.timestamp,
    });
  }

  deleteEstablishment(id: string): Promise<void> {
    return this.establishmentCollection.doc(id).delete();
  }

  addQueue(establishment: Establishment): Promise<void> {
    return this.establishmentCollection.doc(establishment.id).update({ queueTotal: establishment.queueTotal });
  }
}

*/