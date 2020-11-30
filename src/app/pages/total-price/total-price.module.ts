import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalPricePageRoutingModule } from './total-price-routing.module';

import { TotalPricePage } from './total-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalPricePageRoutingModule
  ],
  declarations: [TotalPricePage]
})
export class TotalPricePageModule {}
