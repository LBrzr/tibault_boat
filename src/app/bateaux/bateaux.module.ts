import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauxPageRoutingModule } from './bateaux-routing.module';

import { BateauxPage } from './bateaux.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule
  ],
  declarations: [BateauxPage]
})
export class BateauxPageModule {}
