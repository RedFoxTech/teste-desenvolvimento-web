import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonlistComponent } from './pokemonlist.component';

describe('PokemonlistComponent', () => {
  let component: PokemonlistComponent;
  let fixture: ComponentFixture<PokemonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
