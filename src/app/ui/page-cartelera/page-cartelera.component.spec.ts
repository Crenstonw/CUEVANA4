import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarteleraComponent } from './page-cartelera.component';

describe('PageCarteleraComponent', () => {
  let component: PageCarteleraComponent;
  let fixture: ComponentFixture<PageCarteleraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCarteleraComponent]
    });
    fixture = TestBed.createComponent(PageCarteleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
