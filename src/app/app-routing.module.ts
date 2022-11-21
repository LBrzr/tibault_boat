import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "bateaux",
    loadChildren: () =>
      import("./bateaux/bateaux.module").then((m) => m.BateauxPageModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((m) => m.ContactPageModule),
  },
  {
    path: "produits",
    loadChildren: () =>
      import("./produits/produits.module").then((m) => m.ProduitsPageModule),
  },
  {
    path: "recettes",
    loadChildren: () =>
      import("./recettes/recettes.module").then((m) => m.RecettesPageModule),
  },
  {
    path: "restaurants",
    loadChildren: () =>
      import("./restaurants/restaurants.module").then(
        (m) => m.RestaurantsPageModule
      ),
  },
  {
    path: "single-bateau",
    loadChildren: () =>
      import("./single-bateau/single-bateau.module").then(
        (m) => m.SingleBateauPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
