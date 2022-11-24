import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  produitList!: Produit[];

  constructor(private router: Router, private produitService: ProduitService) { }

  ngOnInit() {
    this.produitService.getProduits().subscribe({
      next: produits => this.produitList = produits,
      error: console.error,
    })
  }

  toSingleProduct(produit: Produit) {
    let NavigationExtras: NavigationExtras = {
      state: {
        produit: produit
      },
    };
    this.router.navigate(["/single-produit"], NavigationExtras);
  }
}
