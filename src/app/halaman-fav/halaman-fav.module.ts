import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanFavPageRoutingModule } from './halaman-fav-routing.module';

import { HalamanFavPage } from './halaman-fav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanFavPageRoutingModule
  ],
  declarations: [HalamanFavPage]
})
export class HalamanFavPageModule {}
