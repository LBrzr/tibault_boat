import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {

  @Input('title') title?: string;
  @Input('showBack') showBack: boolean = true;
  @Input('showCart') showCart: boolean = true;
  
  constructor(private router: Router) { }
  
  ngOnInit() {}
  
  hasTitle(): boolean { return this.title != null && this.title != '' }

  goToCart() {
    this.router.navigate(["/panier"]);
  }
}
