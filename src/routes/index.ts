import { Router } from 'express';

import { pokemonsRoutes } from './pokemon.routes';

const router = Router();

router.use("/pokemons", pokemonsRoutes);

export { router };
