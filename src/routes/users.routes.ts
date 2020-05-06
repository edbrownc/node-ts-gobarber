import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', async (request, response) => {
  try {
    return response.json({ ok: 'ok1' });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
