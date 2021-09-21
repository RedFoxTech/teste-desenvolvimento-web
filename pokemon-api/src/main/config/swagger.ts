import { Express } from 'express';
import swaggerConfig from '../docs';
import { setup, serve } from 'swagger-ui-express';
import { noCache } from 'main/middlewares/no-cache';

export default (app: Express): void => {
  app.use('/api-docs', noCache, serve, setup(swaggerConfig));
};
