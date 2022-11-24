import { Component } from '@angular/core';
import { ProductsService } from './products.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  


  	constructor(private productService: ProductsService,
  		public alertController: AlertController, productsService:ProductsService, private productsservice: ProductsService) {}

    searchTerm: string;  
    productos = []
    todosLosProductos = []

  	ngOnInit(){
  		// this.products = this.productService.getProducts()
      this.getProductos()
  }

  async getProductos() {
    this.productos = await this.productService.getProductos()
    console.table(this.productos);
    // this.todosLosProductos = Array.from(this.productos)
  }


    async presentAlert(){
    const alert = await this.alertController.create({
      header: "¡HECHO!",
      message: "Ha sido agregado al carrito correctamente.",
      buttons: ["OK"]
    })
    await alert.present(); 
  }

  
/*  async favorito(){
 const buttons = document.getElementsByTagName("button");

const buttonPressed = e => {
  console.log(e.target.id);  // Get ID of Clicked Element
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
    // this.productsservice.marcarFavorito(id)
  } */
} 
