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
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./restaurant/restaurant.module').then( m => m.RestaurantPageModule)
  },
  {
    path: 'recette',
    loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'single-restaurant',
    loadChildren: () => import('./single-restaurant/single-restaurant.module').then( m => m.SingleRestaurantPageModule)
  },  {
    path: 'single-recette',
    loadChildren: () => import('./single-recette/single-recette.module').then( m => m.SingleRecettePageModule)
  },
  {
    path: 'single-bateau',
    loadChildren: () => import('./single-bateau/single-bateau.module').then( m => m.SingleBateauPageModule)
  },
  {
    path: 'single-produit',
    loadChildren: () => import('./single-produit/single-produit.module').then( m => m.SingleProduitPageModule)
  },
  {
    path: 'produit-categorie',
    loadChildren: () => import('./produit-categorie/produit-categorie.module').then( m => m.ProduitCategoriePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
