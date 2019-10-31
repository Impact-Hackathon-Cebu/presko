import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,

} from "@angular/fire/firestore";
import { map, take } from "rxjs/operators";
import { Observable } from "rxjs";

export interface Product {
  id?: string;
  supplierID: string;
  price: number;
  name: string;
  stock: number;
  supplierName: string;
  address: string;
}

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Observable<Product[]>;
  private productCollection: AngularFirestoreCollection<Product>;

  constructor(private afs: AngularFirestore) {
    this.productCollection = this.afs.collection<Product>("products");
    this.products = this.productCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getProducts(): Observable<Product[]> {
    /*
    let prods[];
    const id = "";
    this.products.forEach(product => {
      console.log(product);
      if(product['supplierID'] === id)
      {
        prods.append(products);
      }
    });
    return prods; */
    return this.products;
  }

  getProduct(id: string): Observable<Product> {
    return this.productCollection.doc<Product>(id).valueChanges().pipe(
      map(product => {
        product.id = id;
        return product;
      })
    );
  }

  addProduct(product: Product): Promise<DocumentReference> {
    return this.productCollection.add(product);
  }

  updateProduct(product: Product): Promise<void> {
    return this.productCollection.doc(product.id).update({
      price: product.price,
      name: product.name,
      stock: product.stock,
      address: product.address
    });
  }

  deleteProduct(id: string): Promise<void> {
    return this.productCollection.doc(id).delete();
  }
  /*
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

