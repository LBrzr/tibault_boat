import { Restaurant } from "../models/restaurant";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
  restaurantList!: Restaurant[];

  constructor(private http: HttpClient) {}

  getRestaurants() {
    return this.http.get<Restaurant[]>("assets/data/restaurant.json");
  }
}
