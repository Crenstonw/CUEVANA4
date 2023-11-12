import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cartelera-nav-bar',
  templateUrl: './cartelera-nav-bar.component.html',
  styleUrls: ['./cartelera-nav-bar.component.css']
})
export class CarteleraNavBarComponent {
  @ViewChild('all') all: ElementRef | undefined;
  
  @Output() numero = new EventEmitter<number>()

   click(numero: number) {
    this.numero.emit(numero);
  }
}
