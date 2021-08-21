import { Router } from 'express';

import pokemonRouter from '../../../../modules/pokemons/infra/http/routes/pokemons.routes';

const routes = Router();

routes.use("/pokemons", pokemonRouter);

export default routes;