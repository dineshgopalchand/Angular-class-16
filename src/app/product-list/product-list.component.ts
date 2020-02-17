import { Component, OnInit } from '@angular/core';
import { ProductDetails, ProductService } from '../service/product.service';
import { CartService } from '../shopping/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductDetails[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.products;
    // console.log(this.products);
  }

  addToCart(product) {
    console.log('product is being clicked', product);
    this.cartService.addProduct(product);
  }

  get cartList() {
    return this.cartService.cartProducts;
  }

}




