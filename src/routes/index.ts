import { Application } from 'express';
import { Container, Service } from 'typedi';

import userRoutes from './user/routes';

@Service()
class RestRouters {
  app: Application;

  constructor() {
    this.app = Container.get('expressServer');
  }

  initialize() {
    this.app.use('/user', userRoutes);
  }
}

export default RestRouters;
