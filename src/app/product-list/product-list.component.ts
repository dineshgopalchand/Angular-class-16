import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductDetails, ProductService } from '../service/product.service';
import { CartService } from '../shopping/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  //   template : `
  //   <h2 class="text-center">Product List</h2>
  // <div>
  //     <h4>Added product!!</h4>
  //     {{ cartService.cartProducts | json }}
  // </div>
  // <div class="flex-cotainer-wrap">
  //     <div class="m-2" *ngFor="let product of products">
  //         <app-product-view title="product view" [productDetails]="product" (addToCart)="addToCart($event)"></app-product-view>
  //     </div>
  // </div>`,
  styleUrls: ['./product-list.component.scss', './product-lists.component.scss'],
  styles: ['h4{font-style:italic}'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  products: ProductDetails[] = [];

  constructor(public productService: ProductService, public cartService: CartService) { }

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




