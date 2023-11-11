import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraUiComponent } from './cartelera-ui.component';

describe('CarteleraUiComponent', () => {
  let component: CarteleraUiComponent;
  let fixture: ComponentFixture<CarteleraUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraUiComponent]
    });
    fixture = TestBed.createComponent(CarteleraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
