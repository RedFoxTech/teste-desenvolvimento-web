import { PokemonModule } from "./modules/pokemon/pokemon.module";

export class AppModule {
  instantiate() {
    new PokemonModule().instantiate();
  }
}
