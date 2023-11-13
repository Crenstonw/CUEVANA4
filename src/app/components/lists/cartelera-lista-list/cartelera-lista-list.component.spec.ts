import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraListaListComponent } from './cartelera-lista-list.component';

describe('CarteleraListaListComponent', () => {
  let component: CarteleraListaListComponent;
  let fixture: ComponentFixture<CarteleraListaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraListaListComponent]
    });
    fixture = TestBed.createComponent(CarteleraListaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
