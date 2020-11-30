import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddItemHomePage } from './add-item-home.page';

const routes: Routes = [
  {
    path: '',
    component: AddItemHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddItemHomePageRoutingModule {}
