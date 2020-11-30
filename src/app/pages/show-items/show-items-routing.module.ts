import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowItemsPage } from './show-items.page';

const routes: Routes = [
  {
    path: '',
    component: ShowItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowItemsPageRoutingModule {}
