import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresListaListComponent } from './actores-lista-list.component';

describe('ActoresListaListComponent', () => {
  let component: ActoresListaListComponent;
  let fixture: ComponentFixture<ActoresListaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActoresListaListComponent]
    });
    fixture = TestBed.createComponent(ActoresListaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
