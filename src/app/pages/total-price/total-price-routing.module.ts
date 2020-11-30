import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalPricePage } from './total-price.page';

const routes: Routes = [
  {
    path: '',
    component: TotalPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPricePageRoutingModule {}
