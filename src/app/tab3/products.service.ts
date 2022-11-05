import { Injectable } from '@angular/core';
import { Product } from './product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private products: Product[] = [
	{
		id: "1",
		title: "Banana",
		imageURL: 'https://hdstatic.net/gridfs/holadoctor/621x470_55803ef0b93795c1498b4567-1593215415,863.jpg',
		comments: ['Excelente estado de las bananas, muy conforme.', 'Recibí todo perfecto, súper recomendado!'],
    price: 20.99,
    previousPrice: 29.99
	},
	{
		id: "2",
		title: "Manzana",
		imageURL: 'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg',
		comments: ['Excelente estado de las manzanas, muy conforme.', 'Recibí todo perfecto, súper recomendado!'],
    price: 15.99,
    previousPrice: 20.25
	},
	{
		id: "3",
		title: "Pera",
		imageURL: 'http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg',
		comments: ['Excelente estado de las peras, muy conforme.', 'Recibí todo perfecto, súper recomendado!'],
    price: 50.75,
    previousPrice: 67.99
	},
  {
    id: "4",
    title: "Naranja",
    imageURL: 'https://img.freepik.com/fotos-premium/fruta-naranja-hojas-pared-blanca_253984-3354.jpg?w=2000',
    comments: [],
    price: 37.55,
    previousPrice: 41.75
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

  addProduct(title: string, imageURL: string, price: number, previousPrice: number) {
  	this.products.push({
  		title,
  		imageURL,
  		comments: [],
  		id: this.products.length + 1 + "",
      price,
      previousPrice
  	});
  }

  deleteProduct(productId: string) {
  	this.products = this.products.filter(product => {
  		return product.id !== productId
  	})
  }



}
