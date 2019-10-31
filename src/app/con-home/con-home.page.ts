import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../services/prodservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Supplier, SupplierService } from '../services/supservice.service';


@Component({
  selector: 'app-con-home',
  templateUrl: './con-home.page.html',
  styleUrls: ['./con-home.page.scss'],
})
export class ConHomePage implements OnInit {

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

}
