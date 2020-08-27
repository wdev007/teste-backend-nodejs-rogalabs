import 'reflect-metadata';
import 'dotenv/config';
import express, { Application } from 'express';

import routes from './routes';
import '@shared/infra/typeorm';
import '@shared/containers';

class App {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
