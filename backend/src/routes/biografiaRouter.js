import { Router } from 'express';
import { renderBiografia } from '../controllers/biografiaController.js';

const router = Router();

router.get('/biografia', renderBiografia);

export default router;