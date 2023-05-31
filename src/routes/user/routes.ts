import { Router } from 'express';

const router = Router();

router.get('/', async (_, res) => {
  res.status(200).json({ name: 'user name' });
});

export default router;
