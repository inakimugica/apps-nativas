import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: '1',
      title: 'Banana',
      imageURL: 'https://media.istockphoto.com/photos/banana-picture-id1184345169?k=20&m=1184345169&s=612x612&w=0&h=EKwCw7Zx20N3l8G_rQI6KcitWTQ5ahkgmEBr2QA1FMk=',
      information: ['De Bolivia', 'Buen precio']
    },
    {
      id: '2',
      title: 'Manzana',
      imageURL: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
      information: ['De Santa Cruz', 'Buen precio']
    }
  ]

  constructor() { }

  getProducts() {
    return [...this.products]
  }

  getProduct(productId: string) {
    return {
      ...this.products.find(product => {
        return product.id === productId
      })
    }
  }

  addProduct(title: string, imageURL: string) {
    this.products.push({
      title,
      imageURL,
      information: [],
      id: this.products.length + 1 + ""
    });
  }

  deleteProduct(productId: string) {
    this.products = this.products.filter(product => {
      return product.id !== productId
    })
  }

}
