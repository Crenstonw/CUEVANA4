import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActoresListComponent } from './page-actores-list.component';

describe('PageActoresListComponent', () => {
  let component: PageActoresListComponent;
  let fixture: ComponentFixture<PageActoresListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageActoresListComponent]
    });
    fixture = TestBed.createComponent(PageActoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
