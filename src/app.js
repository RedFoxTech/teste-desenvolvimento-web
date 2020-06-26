import './bootstrap';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use('/uploads', express.static(uploadConfig.directory));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
