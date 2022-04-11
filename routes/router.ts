import { Router } from 'express';
import api from './requests';

const router = Router();

router.use('/roulette', api);

export default router;
