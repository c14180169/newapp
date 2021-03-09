import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'halaman-baru',
    loadChildren: () => import('./halaman-baru/halaman-baru.module').then( m => m.HalamanBaruPageModule)
  },
  {
    path: 'halaman-fav',
    loadChildren: () => import('./halaman-fav/halaman-fav.module').then( m => m.HalamanFavPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
