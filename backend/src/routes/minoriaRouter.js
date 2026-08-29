import { Router } from 'express';
import { renderMinoria } from '../controllers/minoriaController.js';

const router = Router();

router.get('/minoria', renderMinoria);

export default router;