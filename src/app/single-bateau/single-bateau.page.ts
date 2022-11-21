import { ImageLoader } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-single-bateau",
  templateUrl: "./single-bateau.page.html",
  styleUrls: ["./single-bateau.page.scss"],
})
export class SingleBateauPage implements OnInit {
  bateauName: any;

  boat!: {
    bateauName: string;
    bateauDescription: string[];
    bateauPhoto: string;
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.boat = this.router.getCurrentNavigation()!.extras!.state!["boat"];
        console.log(this.boat.bateauDescription);
        console.log(this.boat.bateauName);
        console.log(this.boat.bateauPhoto);
      }
    });
  }

  ngOnInit() {}
}
