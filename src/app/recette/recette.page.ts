import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../models/recette'
import { RecettesService } from '../services/recettes.service';
@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  RecetteList!: Recette[];

  constructor(private router: Router, private recettesService: RecettesService) { }

  ngOnInit() {
    this.recettesService.getRecettes().subscribe(res => {
      this.RecetteList = res
      console.log(this.RecetteList);
    },
    err => {
      console.log("error")
    }
    );
  }

  onLoadRecette(recette: {name: string, description: string[], image:string}) {
    let navigationExtras: NavigationExtras = {
      state: {
        recette:recette
      }
    };
    this.router.navigate(['/single-recette'], navigationExtras);
  };
}
