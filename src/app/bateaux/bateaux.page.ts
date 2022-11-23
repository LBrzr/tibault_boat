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
    this.bateauList = this.bateauService.bateauList;
  }

  onLoadBateau(name: Bateau) {
    let NavigationExtras: NavigationExtras = {
      state: {
        boat: name,
      },
    };
    this.router.navigate(["/single-bateau"], NavigationExtras);
  }
}
