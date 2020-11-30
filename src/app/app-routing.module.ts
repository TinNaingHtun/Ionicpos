import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'items-lists',
    loadChildren: () => import('./items-lists/items-lists.module').then( m => m.ItemsListsPageModule)
  },
  // {
  //   path: 'recent',
  //   loadChildren: () => import('./recent/recent.module').then( m => m.RecentPageModule)
  // },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-item-home',
    loadChildren: () => import('./add-item-home/add-item-home.module').then( m => m.AddItemHomePageModule)
  },
  {
    path: 'add-items',
    loadChildren: () => import('./pages/add-items/add-items.module').then( m => m.AddItemsPageModule)
  },
  {
    path: 'update-items\{{data}}',
    loadChildren: () => import('./pages/update-items/update-items.module').then( m => m.UpdateItemsPageModule)
  },
  {
    path: 'show-items',
    loadChildren: () => import('./pages/show-items/show-items.module').then( m => m.ShowItemsPageModule)
  },
  {
    path: 'total-price',
    loadChildren: () => import('./pages/total-price/total-price.module').then( m => m.TotalPricePageModule)
  },
  {
    path: 'edit-item-home',
    loadChildren: () => import('./edit-item-home/edit-item-home.module').then( m => m.EditItemHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
