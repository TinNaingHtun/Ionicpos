import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsListsPageRoutingModule } from './items-lists-routing.module';

import { ItemsListsPage } from './items-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsListsPageRoutingModule
  ],
  declarations: [ItemsListsPage]
})
export class ItemsListsPageModule {}
