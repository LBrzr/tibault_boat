import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-single-bateau",
  templateUrl: "./single-bateau.page.html",
  styleUrls: ["./single-bateau.page.scss"],
})
export class SingleBateauPage implements OnInit {
  bateau!: {
    name: string;
    description: string;
    image: string;
  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let state = this.router.getCurrentNavigation()!.extras.state;
        this.bateau = state!["bateau"];
        console.log(this.bateau);
      }
    });
  }

  ngOnInit() {}
}
