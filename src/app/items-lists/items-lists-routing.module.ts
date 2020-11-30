import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListsPage } from './items-lists.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsListsPageRoutingModule {}
