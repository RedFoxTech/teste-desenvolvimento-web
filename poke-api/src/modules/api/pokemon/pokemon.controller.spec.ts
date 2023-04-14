import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let pokemonController: PokemonController;

  beforeEach(async () => {
    const pokemon: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    pokemonController = pokemon.get<PokemonController>(PokemonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(pokemonController.getHello()).toBe('Hello World!');
    });
  });
});
