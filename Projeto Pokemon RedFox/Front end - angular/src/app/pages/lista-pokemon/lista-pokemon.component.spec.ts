import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokemonComponent } from './lista-pokemon.component';

describe('ListaPokemonComponent', () => {
  let component: ListaPokemonComponent;
  let fixture: ComponentFixture<ListaPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
