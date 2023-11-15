import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListaListComponent } from './movie-lista-list.component';

describe('MovieListaListComponent', () => {
  let component: MovieListaListComponent;
  let fixture: ComponentFixture<MovieListaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListaListComponent]
    });
    fixture = TestBed.createComponent(MovieListaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
