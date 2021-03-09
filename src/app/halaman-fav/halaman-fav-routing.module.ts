import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HalamanFavPage } from './halaman-fav.page';

const routes: Routes = [
  {
    path: '',
    component: HalamanFavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HalamanFavPageRoutingModule {}
