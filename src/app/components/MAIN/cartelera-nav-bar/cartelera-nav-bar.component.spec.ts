import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteleraNavBarComponent } from './cartelera-nav-bar.component';

describe('CarteleraNavBarComponent', () => {
  let component: CarteleraNavBarComponent;
  let fixture: ComponentFixture<CarteleraNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteleraNavBarComponent]
    });
    fixture = TestBed.createComponent(CarteleraNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
