import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemHomePageRoutingModule } from './add-item-home-routing.module';

import { AddItemHomePage } from './add-item-home.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddItemHomePageRoutingModule
  ],
  declarations: [AddItemHomePage]
})
export class AddItemHomePageModule {}
