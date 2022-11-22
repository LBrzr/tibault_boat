import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.page.html",
  styleUrls: ["./restaurant.page.scss"],
})
export class RestaurantPage implements OnInit {
  resto!: {
    name: string;
    description: string;
    image: string;
  };
  constructor() {}

  ngOnInit() {}
}
