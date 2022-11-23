import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Restaurant } from "../models/restaurant";
import { RestaurantService } from "../services/restaurant.service";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.page.html",
  styleUrls: ["./restaurant.page.scss"],
})
export class RestaurantPage implements OnInit {
  restaurantList!: Restaurant[];

  constructor(
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.restaurantService.getRestaurants().subscribe(
      (res) => {
        this.restaurantList = res;
        console.log(this.restaurantList);
      },
      (err) => {
        console.log("error");
      }
    );
  }
  onLoadResto(restaurant: {
    name: string;
    description: string;
    image: string;
  }) {
    let NavigationExtras: NavigationExtras = {
      state: {
        restaurant: restaurant,
      },
    };
    this.router.navigate(["/single-restaurant"], NavigationExtras);
  }
}
