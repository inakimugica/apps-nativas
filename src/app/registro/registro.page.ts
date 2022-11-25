import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private usuarioservice: UsuarioService) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmationPassword': new FormControl("", Validators.required)
    });
  }

  usuarios = []
  


  ngOnInit() {
  }

  /* async getProductos() {
    this.productos = await this.productService.getProductos()
    console.table(this.productos);
    // this.todosLosProductos = Array.from(this.productos)
  } */

  async guardar(){
    let f = this.formularioRegistro.value;
    this.usuarios = await this.usuarioservice.getUsuarios()
    if(f.password != f.confirmationPassword){
      const alert = await this.alertController.create({
        header: 'Contraseñas diferentes',
        message: 'Las contraseñas no coinciden',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    let usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    if(f.nombre == usuario.nombre && f.password == usuario.password) {
      this.usuarioservice.register(usuario)
      this.navCtrl.navigateRoot('login');
    }
  }

}