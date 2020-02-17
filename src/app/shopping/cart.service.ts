import { Injectable } from '@angular/core';
import { ProductDetails } from '../service/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList: CartProduct[] = [];
  constructor() { }
  get cartProducts() {
    return this.cartList;
  }
  addProduct(product: ProductDetails) {
    const indexVal = this.cartProducts.findIndex((prod) => product.id === prod.product.id);
    // console.log(indexVal);
    if (indexVal !== -1) {
      this.cartList.splice(indexVal, 1, {
        product,
        quantity: this.cartList[indexVal].quantity + 1
      });
    } else {
      this.cartList.push({
        product,
        quantity: 1
      });
    }
  }

  removeProduct(product: ProductDetails) {
    // write functionality here
  }
}


export interface CartProduct {
  quantity: number;
  product: ProductDetails;
}
