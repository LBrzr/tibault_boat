import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from '../appbar/appbar.component';
import { IonicModule } from '@ionic/angular';
import { NumberControlComponent } from '../number-control/number-control.component';



@NgModule({
  declarations: [AppbarComponent, NumberControlComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AppbarComponent, NumberControlComponent]
})
export class SharedModule { }
