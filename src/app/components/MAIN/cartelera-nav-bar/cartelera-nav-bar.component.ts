import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CarteleraService } from 'src/app/service/cartelera.interface';

@Component({
  selector: 'app-cartelera-nav-bar',
  templateUrl: './cartelera-nav-bar.component.html',
  styleUrls: ['./cartelera-nav-bar.component.css']
})
export class CarteleraNavBarComponent {
  
  constructor(private carteleraService: CarteleraService) {};

  click(numero: number) {
    this.carteleraService.emitNumber(numero);
  }
}
