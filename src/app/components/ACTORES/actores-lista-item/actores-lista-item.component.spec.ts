import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoresListaItemComponent } from './actores-lista-item.component';

describe('ActoresListaItemComponent', () => {
  let component: ActoresListaItemComponent;
  let fixture: ComponentFixture<ActoresListaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActoresListaItemComponent]
    });
    fixture = TestBed.createComponent(ActoresListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
