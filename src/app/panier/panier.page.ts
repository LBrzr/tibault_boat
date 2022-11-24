import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinePanier } from '../models/line_panier';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  constructor(private router: Router, private panier: PanierService) { }

  ngOnInit() {
  }

  getLines() {
    return this.panier.getContent();
  }

  checkout() {
    return this.panier.payer();
  }

  moreOnLine(line: LinePanier) {
    this.panier.update(line, line.quantite + 1);
  }

  lessOnLine(line: LinePanier) {
    this.panier.update(line, line.quantite - 1);
  }
}
