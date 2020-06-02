import { Pokemon } from './pokemon';

describe('Pokemon', () => {
  it('should be defined', () => {
    expect(new Pokemon()).toBeDefined();
  });
});
