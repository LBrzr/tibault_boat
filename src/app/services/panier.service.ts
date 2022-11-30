import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LinePanier } from "../models/line_panier";
import { Produit } from "../models/produit";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PanierService {

  constructor(private http: HttpClient) {}

  _linePanierList: LinePanier[] = [];

  getContent(): LinePanier[] {
    return this._linePanierList;
  }

  getTotal() :number {
    let total: number = 0;
    this._linePanierList.forEach(line => {
      total += line.quantite * (line.produit.sale ? line.produit.price - line.produit.discount : line.produit.price);
    });
    return total;
  }

  update(line: LinePanier, quantite: number): void {
    let index = this._linePanierList.indexOf(line);
    this._linePanierList[index].quantite = quantite;
    console.log(quantite, line.produit.name, " updated !");
  }

  async ajouter(produit: Produit, quantite: number) {
    let index = this._linePanierList.map(line => line.produit).indexOf(produit);
    if (index < 0) {
      this._linePanierList.push({produit: produit, quantite: quantite});
    } else {
      let line = this._linePanierList[index];
      line.quantite += quantite;
    }
    console.log(quantite, produit.name, " added !");
  }

  retirerLine(line: LinePanier) {
    this.retirerProduit(line.produit);
  }

  retirerProduit(produit: Produit) {
    let index = this._linePanierList.map(line => line.produit).indexOf(produit);
    if (index > -1) {
      this._linePanierList.splice(index, 1);
    }
    console.log(produit.name, " removed !");
  }

  payer() {

  }
}
