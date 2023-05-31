import { Router } from 'express';
import { Container } from 'typedi';

import GetUser from '../../services/user/get';

const router = Router();

router.get('/', async (_, res) => {
  const getUser = Container.get(GetUser);
  res.status(200).json(getUser.get());
});

export default router;
