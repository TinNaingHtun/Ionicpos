import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateItemsPageRoutingModule } from './update-items-routing.module';

import { UpdateItemsPage } from './update-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateItemsPageRoutingModule
  ],
  declarations: [UpdateItemsPage]
})
export class UpdateItemsPageModule {}
