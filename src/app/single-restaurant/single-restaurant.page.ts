import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-single-restaurant",
  templateUrl: "./single-restaurant.page.html",
  styleUrls: ["./single-restaurant.page.scss"],
})
export class SingleRestaurantPage implements OnInit {
  restaurant!: {
    name: string;
    description: string;
    image: string;
  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let state = this.router.getCurrentNavigation()!.extras.state;
        this.restaurant = state!["restaurant"];
        console.log(this.restaurant);
      }
    });
  }

  ngOnInit() {}
}
