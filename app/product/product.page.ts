import { Component } from '@angular/core';
import { ProductService} from './product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  products = []

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts()
  }

}
