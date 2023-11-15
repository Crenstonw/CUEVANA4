import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieListComponent } from './page-movie-list.component';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMovieListComponent]
    });
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
