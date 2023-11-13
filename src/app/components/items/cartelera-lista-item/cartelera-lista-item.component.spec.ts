import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraListaItemComponent } from './cartelera-lista-item.component';

describe('CarteleraListaItemComponent', () => {
  let component: CarteleraListaItemComponent;
  let fixture: ComponentFixture<CarteleraListaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraListaItemComponent]
    });
    fixture = TestBed.createComponent(CarteleraListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
