import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-single-recette",
  templateUrl: "./single-recette.page.html",
  styleUrls: ["./single-recette.page.scss"],
})
export class SingleRecettePage implements OnInit {
  recette!: {
    isOn: any;
    name: string;
    image: string;
    Infos: string[];
    Ingredients: string[];
    Etapes: string[];
  };
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let state = this.router.getCurrentNavigation()!.extras.state;
        this.recette = state!["recette"];
        console.log(this.recette);
      }
    });
  }

  ngOnInit() {}
}
