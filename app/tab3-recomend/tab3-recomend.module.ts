import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3RecomendPageRoutingModule } from './tab3-recomend-routing.module';

import { Tab3RecomendPage } from './tab3-recomend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3RecomendPageRoutingModule
  ],
  declarations: [Tab3RecomendPage]
})
export class Tab3RecomendPageModule {}
