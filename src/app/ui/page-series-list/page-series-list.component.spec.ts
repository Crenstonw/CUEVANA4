import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSeriesListComponent } from './page-series-list.component';

describe('PageSeriesListComponent', () => {
  let component: PageSeriesListComponent;
  let fixture: ComponentFixture<PageSeriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSeriesListComponent]
    });
    fixture = TestBed.createComponent(PageSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
