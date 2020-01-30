import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPokemonComponent } from './cad-pokemon.component';

describe('CadPokemonComponent', () => {
  let component: CadPokemonComponent;
  let fixture: ComponentFixture<CadPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
