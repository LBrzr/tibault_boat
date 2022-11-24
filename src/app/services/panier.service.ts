import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LinePanier } from "../models/line_panier";
import { Produit } from "../models/produit";

@Injectable({
  providedIn: "root",
})
export class PanierService {

  constructor(private http: HttpClient) {}

  _linePanierList: LinePanier[] = [];

  getPanier(): LinePanier[] {
    return this._linePanierList;
  }

  update(line: LinePanier, quantite: number): void {
    let index = this._linePanierList.indexOf(line);
    this._linePanierList[index].quantite = quantite;
    console.log(quantite, line.produit.name, " updated !");
  }

  ajouter(produit: Produit, quantite: number): void {
    let index = this._linePanierList.map(line => line.produit).indexOf(produit);
    if (index < 0) {
      this._linePanierList.push({produit: produit, quantite: quantite});
    } else {
      let line = this._linePanierList[index];
      line.quantite += quantite;
    }
    console.log(quantite, produit.name, " added !");
  }

  retirer(produit: Produit) {
    let index = this._linePanierList.map(line => line.produit).indexOf(produit);
    if (index > -1) {
      this._linePanierList.splice(index, 1);
    }
    console.log(produit.name, " removed !");
  }
}
