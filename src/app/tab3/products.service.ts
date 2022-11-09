import { Injectable } from '@angular/core';
// import { Product } from './product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  /* getProducts() {
  	return [...this.products]
  }

  getProduct(productId: string) {
  		return {
	  		...this.products.find(product => {
	  		return product.id === productId
  		})
  	}
  } */

  async getProductos() {
	const res = await fetch("http://localhost:8080/producto")
  const resjson = (await res).json()
  return resjson
}

}
