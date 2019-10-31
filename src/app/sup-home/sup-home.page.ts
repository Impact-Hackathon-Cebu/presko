import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../services/prodservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier, SupplierService } from '../services/supservice.service';


@Component({
  selector: 'app-sup-home',
  templateUrl: './sup-home.page.html',
  styleUrls: ['./sup-home.page.scss'],
})
export class SupHomePage implements OnInit {

  public products: Observable<Product[]>;

  constructor(
    private supservice: SupplierService,
    private prodService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.products = this.prodService.getProducts();
  }

  add() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.router.navigate(['sup-add/' + id]);
  }

}
