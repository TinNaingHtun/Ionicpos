import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemsPageRoutingModule } from './add-items-routing.module';

import { AddItemsPage } from './add-items.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddItemsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddItemsPage]
})
export class AddItemsPageModule {}
