import { Application } from 'express';

import userRoutes from './user/routes';

export default function initializeRestRouters(app: Application) {
  app.use('/user', userRoutes);
}
