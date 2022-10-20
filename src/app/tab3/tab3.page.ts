import { Component } from '@angular/core';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	products = []

  	constructor(private productService: ProductsService) {}

  	ngOnInit(){
  		this.products = this.productService.getProducts()
  }
} 
