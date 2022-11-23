import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private router: Router) {}

  onGoToProduitPromo() {
    this.router.navigate(["/produit"]);
  }
  onGoToBateaux() {
    this.router.navigate(["/bateaux"]);
  }
  onGoToRestaurants() {
    this.router.navigate(["/restaurant"]);
  }
  onGoToRecettes() {
    this.router.navigate(["/recette"]);
  }
  onGoToContact() {
    this.router.navigate(["/contact"]);
  }
}
