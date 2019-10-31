import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'signin', loadChildren: './signin/signin.module#SigninPageModule' },
  { path: 'sup-home/:id', loadChildren: './sup-home/sup-home.module#SupHomePageModule' },
  { path: 'con-home/:id', loadChildren: './con-home/con-home.module#ConHomePageModule' },
  { path: 'sup-add/:id', loadChildren: './sup-add/sup-add.module#SupAddPageModule' },
  { path: 'sup-add', loadChildren: './sup-add/sup-add.module#SupAddPageModule' },
  { path: 'prod-details/:id', loadChildren: './prod-details/prod-details.module#ProdDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
