import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/categorie';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage implements OnInit {

  categorie!: Categorie;
  produitList!: Produit[];

  constructor(private route: ActivatedRoute, private router: Router, private produitService: ProduitService) { 
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let state = this.router.getCurrentNavigation()!.extras.state!;
        this.categorie = state["categorie"];
        console.log(this.categorie);
      }
    });
  }

  ngOnInit() {
    this.produitService.getProduits().subscribe({
      next: produits => this.produitList = produits.filter((value: Produit, index: number, array: Produit[]) => value.category == this.categorie.id),
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
