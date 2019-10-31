import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,

} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

export interface Supplier {
  id?: string;
  name: string;
  email: string;
  address: string;
  phone: number;
  role: string;
  points: number;
}

@Injectable({
  providedIn: "root"
})
export class SupplierService {
  private suppliers: Observable<Supplier[]>;
  private supplierCollection: AngularFirestoreCollection<Supplier>;

  constructor(private afs: AngularFirestore) {
    this.supplierCollection = this.afs.collection<Supplier>("suppliers");
    this.suppliers = this.supplierCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.suppliers;
  }

  getSupplier(id: string): Observable<Supplier> {
    return this.supplierCollection.doc<Supplier>(id).valueChanges().pipe(
      map(supplier => {
        supplier.id = id;
        return supplier;
      })
    );
  }
/*
  addSupplier(supplier: Supplier): Promise<DocumentReference> {
    return this.supplierCollection.add(supplier);
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


  addQueue(establishment: Establishment): Promise<void> {
    return this.establishmentCollection.doc(establishment.id).update({ queueTotal: establishment.queueTotal });
  }
  */
}

