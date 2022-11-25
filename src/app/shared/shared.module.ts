import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from '../appbar/appbar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AppbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AppbarComponent]
})
export class SharedModule { }
