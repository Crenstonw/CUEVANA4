import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

    private numeroCompartido: number = 1;

    setNumber(number: number) {
        this.numeroCompartido = number
    }

    getNumber(): number {
        return this.numeroCompartido;
    }

}