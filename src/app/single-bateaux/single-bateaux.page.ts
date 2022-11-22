import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-single-bateaux",
  templateUrl: "./single-bateaux.page.html",
  styleUrls: ["./single-bateaux.page.scss"],
})
export class SingleBateauxPage implements OnInit {
  boat!: {
    name: string;
    description: string;
    image: string;
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.boat = this.router.getCurrentNavigation()!.extras!.state!["boat"];
        console.log(this.boat.description);
        console.log(this.boat.name);
        console.log(this.boat.image);
      }
    });
  }

  ngOnInit() {}
}
