import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditItemHomePage } from './edit-item-home.page';

const routes: Routes = [
  {
    path: '',
    component: EditItemHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditItemHomePageRoutingModule {}
