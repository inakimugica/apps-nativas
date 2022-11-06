import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


      async presentAlert(){
    const alert = await this.alertController.create({
      header: "¡Compra Realizada Exitosamente!",
      message: "Has comprado 5 bananas.",
      buttons: ["OK"]
    })
    await alert.present();
  }

}
