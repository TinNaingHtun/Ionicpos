import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditItemHomePageRoutingModule } from './edit-item-home-routing.module';

import { EditItemHomePage } from './edit-item-home.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditItemHomePageRoutingModule
  ],
  declarations: [EditItemHomePage]
})
export class EditItemHomePageModule {}
