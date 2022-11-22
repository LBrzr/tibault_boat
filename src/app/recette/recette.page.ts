import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Restaurant } from "../models/restaurant";

@Component({
  selector: "app-recette",
  templateUrl: "./recette.page.html",
  styleUrls: ["./recette.page.scss"],
})
export class RecettePage implements OnInit {
  restaurantList!: Restaurant[];

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantList = this.restaurantService.restaurantList.slice();
  }

  onLoadRestaurant(name: Restaurant) {
    let NavigationExtras: NavigationExtras = {
      state: {
        resto: name,
      },
    };
    this.router.navigate(["/single-restaurant"], NavigationExtras);
  }
}
