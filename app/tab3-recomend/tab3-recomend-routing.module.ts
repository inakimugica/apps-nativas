import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3RecomendPage } from './tab3-recomend.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3RecomendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3RecomendPageRoutingModule {}
