import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarteleraService {

    private numeroCompartido = new Subject<number>();

    emitNumber(number: number) {
        this.numeroCompartido.next(number);
    }

    onNumberChange(): Observable<number> {
        return this.numeroCompartido.asObservable();
    }

}