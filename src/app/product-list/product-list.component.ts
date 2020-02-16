import { Component, OnInit } from '@angular/core';
import { ProductDetails, ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductDetails[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
    // console.log(this.products);
  }

  addToCart(product) {
    console.log('product is being clicked', product);
  }

}




