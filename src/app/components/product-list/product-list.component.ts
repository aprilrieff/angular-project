import { Component } from '@angular/core';
import { productData } from '../../data/products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = productData;
  share(name: string) {
    window.alert(`You shared the "${name}" product`);
  }
  onNotify(name: string) {
    window.alert(`You will be notified when the product "${name}" goes on sale.`);
  }
}
