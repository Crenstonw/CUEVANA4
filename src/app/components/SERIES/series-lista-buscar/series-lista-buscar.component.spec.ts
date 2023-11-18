import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListaBuscarComponent } from './SeriesListaBuscarComponent';

describe('SeriesListaBuscarComponent', () => {
  let component: SeriesListaBuscarComponent;
  let fixture: ComponentFixture<SeriesListaBuscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListaBuscarComponent]
    });
    fixture = TestBed.createComponent(SeriesListaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
