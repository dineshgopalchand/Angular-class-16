import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList: ProductDetails[] = [];
  constructor() {
    this.productList = [944, 1011, 984, 467, 123, 999, 787, 788, 555, 676].map((n) => {
      return {
        id: n,
        image: `https://picsum.photos/id/${n}/900/500`,
        description: `${n} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim, quod perferendis`
      };
    });
  }

  get products() {
    return this.productList;
  }

}


export interface ProductDetails {
  id: number;
  image: string;
  description: string;
}
