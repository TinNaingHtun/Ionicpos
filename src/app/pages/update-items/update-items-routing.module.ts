import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateItemsPage } from './update-items.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateItemsPageRoutingModule {}
