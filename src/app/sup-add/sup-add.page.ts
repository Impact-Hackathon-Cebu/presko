import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../services/prodservice.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sup-add',
  templateUrl: './sup-add.page.html',
  styleUrls: ['./sup-add.page.scss'],
})
export class SupAddPage implements OnInit {

  product: Product = {
    supplierID: "",
    price: 0,
    name: "",
    stock: 0,
    supplierName: "",
    address: ""
  };

  constructor(
    private prodService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.prodService.getProduct(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  addProduct() {
    this.prodService.addProduct(this.product).then(() => {
      this.router.navigateByUrl('/sup-home');
      this.showToast('Product Added');
    }, err => {
      this.showToast('There was a problem adding your product :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  updateProduct() {
    this.prodService.updateProduct(this.product).then(() => {
      this.showToast('Product updated');
    }, err => {
      this.showToast('There was a problem updating your product :(');
    });
  }

  deleteProduct() {
    this.prodService.deleteProduct(this.product.id).then(() => {
      this.router.navigateByUrl('');
      this.showToast('Product deleted');
    }, err => {
      this.showToast('There was a problem deleting your product :(');
    });
  }

}
