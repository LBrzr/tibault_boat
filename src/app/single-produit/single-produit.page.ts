import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../models/produit';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.page.html',
  styleUrls: ['./single-produit.page.scss'],
})
export class SingleProduitPage implements OnInit {

  produit!: Produit;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        let state = this.router.getCurrentNavigation()!.extras.state!;
        this.produit = state["produit"];
        console.log(this.produit);
      }
    });
   }

  ngOnInit() {

  }
}
