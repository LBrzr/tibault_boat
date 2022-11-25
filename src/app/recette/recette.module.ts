import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettePageRoutingModule } from './recette-routing.module';

import { RecettePage } from './recette.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RecettePageRoutingModule
  ],
  declarations: [RecettePage]
})
export class RecettePageModule {}
