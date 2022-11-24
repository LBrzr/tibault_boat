import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produit } from "../models/produit";

@Injectable({
  providedIn: "root",
})
export class ProduitService {

  constructor(private http: HttpClient) {}

  getProduits() {
    return this.http.get<Produit[]>("assets/data/produits.json");
  }
}
