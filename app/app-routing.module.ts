import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', },
  { path: 'tab4', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'tab3',
    children: [
      {
        path: "",
        loadChildren: () => import('./product/product.module').then(m => m.Tab3PageModule)
      },
      {
        path: ":placeId",
        loadChildren: () => import('./product/product-detail/product-detail.module').then(m =>m.ProductDetailPageModule)
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
