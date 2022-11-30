import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Bateau } from "../models/bateau";
import { BateauService } from "../services/bateau.service";

@Component({
  selector: "app-bateaux",
  templateUrl: "./bateaux.page.html",
  styleUrls: ["./bateaux.page.scss"],
})
export class BateauxPage implements OnInit {
  bateauList!: Bateau[];

  constructor(private router: Router, private bateauService: BateauService) {}

  ngOnInit() {
    this.bateauService.getBateaux().subscribe(
      (res) => {
        this.bateauList = res;
        console.log(this.bateauList);
      },
      (err) => {
        console.log("error");
      }
    );
  }

  onLoadBateau(bateau: { name: string; description: string; image: string }) {
    let NavigationExtras: NavigationExtras = {
      state: {
        bateau: bateau,
      },
    };
    this.router.navigate(["/single-bateau"], NavigationExtras);
  }
}
