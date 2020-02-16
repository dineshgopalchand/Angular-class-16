import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductDetails } from '../service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  @Input() productDetails: ProductDetails;
  // tslint:disable-next-line:no-output-rename
  @Output('addToCart') addTo = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.productDetails);
  }
  addToCart() {
    this.addTo.emit(this.productDetails);

  }

}
