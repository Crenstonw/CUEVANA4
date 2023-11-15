import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListaItemComponent } from './series-lista-item.component';

describe('SeriesListaItemComponent', () => {
  let component: SeriesListaItemComponent;
  let fixture: ComponentFixture<SeriesListaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesListaItemComponent]
    });
    fixture = TestBed.createComponent(SeriesListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
