import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

	product: Product;

  constructor(private activatedRoute: ActivatedRoute,
  private productsService: ProductsService,
  public alertController: AlertController) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe(paramMap => {
  		const recipeId = paramMap.get('productId')
  		this.product = this.productsService.getProduct(recipeId); 
  		}
  	)
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: "¡HECHO!",
      message: "Ha sido agregado al carrito correctamente.",
      buttons: ["OK"]
    })
    await alert.present();
  }

}
