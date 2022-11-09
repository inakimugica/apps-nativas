import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
// import { Product } from '../product.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  	constructor(private productService: ProductsService,
  		public alertController: AlertController, productsService:ProductsService) {}

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
    this.todosLosProductos = Array.from(this.productos)
  }



    /* async presentAlert(){
    const alert = await this.alertController.create({
      header: "¡HECHO!",
      message: "Ha sido agregado al carrito correctamente.",
      buttons: ["OK"]
    })
    await alert.present(); 
  } */

  
} 
