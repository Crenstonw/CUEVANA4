import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListaItemComponent } from './movie-lista-item.component';

describe('MovieListaItemComponent', () => {
  let component: MovieListaItemComponent;
  let fixture: ComponentFixture<MovieListaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListaItemComponent]
    });
    fixture = TestBed.createComponent(MovieListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
