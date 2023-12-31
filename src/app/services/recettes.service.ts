import { Recette } from '../models/recette';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  recetteList!: Recette[];


  constructor(private http: HttpClient) { }

  getRecettes(){
    return this.http.get<Recette[]>('assets/data/recette.json');
  }
}
