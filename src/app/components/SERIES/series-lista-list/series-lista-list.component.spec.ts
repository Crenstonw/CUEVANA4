import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListaListComponent } from './series-lista-list.component';

describe('SeriesListaListComponent', () => {
  let component: SeriesListaListComponent;
  let fixture: ComponentFixture<SeriesListaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListaListComponent]
    });
    fixture = TestBed.createComponent(SeriesListaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
