import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Produit } from '../models/produit';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.scss'],
})
export class NumberControlComponent implements OnInit {

  quantite: number = 1;
  @Input('produit') produit!: Produit;
  @Input('short') short: boolean = false;
  @Input('showAddToCart') showAddToCart: boolean = true;

  constructor(private panier: PanierService, private toastController: ToastController) { }

  ngOnInit() {}

  addToCart() {
    this.panier.ajouter(this.produit, this.quantite).then(() => { return this.showAddedToast() });
  }

  less() {
    this.quantite--;
  }

  more() {
    this.quantite++;
  }

  showUnavalaibleToast() {
    this.showToast("Ce produit n'est pas disponilbe !");
  }

  showAddedToast() {
    this.showToast(this.produit.name + " ajouté au panier !", 'active');
  }

  async showToast(msg: string, color?: string | undefined) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: 'bottom',
      color: color,
    });

    await toast.present();
  }
}
