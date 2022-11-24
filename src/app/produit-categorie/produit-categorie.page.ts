import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-produit-categorie',
  templateUrl: './produit-categorie.page.html',
  styleUrls: ['./produit-categorie.page.scss'],
})
export class ProduitCategoriePage implements OnInit {

  categories: Categorie[] = Categorie.all;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCatClicked(categorie: Categorie): void {
    let NavigationExtras: NavigationExtras = {
      state: {
        categorie: categorie
      },
    };
    this.router.navigate(["/produit"], NavigationExtras);
  }

}
