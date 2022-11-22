import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import { Restaurant } from '../models/restaurant';


@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})

export class RecettePage implements OnInit {
  restaurantList!: Restaurant[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.
  }

}
