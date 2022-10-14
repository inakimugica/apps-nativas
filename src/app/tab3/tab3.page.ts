import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	public products = [
		{
			id: "1",
			title: "Banana",
			imageURL: 'https://mejorconsalud.as.com/wp-content/uploads/2016/05/beneficios-comer-bananas-maduras.jpg'
		},
		{
			id: "2",
			title: "Manzana",
			imageURL: 'https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg'
		},
		{
			id: "3",
			title: "Pera",
			imageURL: 'http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/26.jpg'
		}
	]


  constructor() {}

  noOnInit(){
  }
}
