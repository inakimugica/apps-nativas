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
		imageURL: 'https://carrefourar.vtexassets.com/arquivos/ids/209558/2301954000008_02.jpg?v=637650839149230000',
		comments: ['Excelente estado de las bananas, muy conforme.', 'Recibí todo perfecto, súper recomendado!']
	},
	{
		id: "2",
		title: "Manzana",
		imageURL: 'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg',
		comments: ['Excelente estado de las manzanas, muy conforme.', 'Recibí todo perfecto, súper recomendado!']
	},
	{
		id: "3",
		title: "Pera",
		imageURL: 'http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg',
		comments: ['Excelente estado de las peras, muy conforme.', 'Recibí todo perfecto, súper recomendado!']
	},
  {
    id: "4",
    title: "Naranja",
    imageURL: 'https://img.freepik.com/fotos-premium/fruta-naranja-hojas-pared-blanca_253984-3354.jpg?w=2000',
    comments: []
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
  		comments: [],
  		id: this.products.length + 1 + ""
  	});
  }

  deleteProduct(productId: string) {
  	this.products = this.products.filter(product => {
  		return product.id !== productId
  	})
  }



}
