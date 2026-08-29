import { Router } from 'express';
import { renderMinoria } from '../controllers/minoriaController';

const router = Router();

router.get('/minoria', renderMinoria);

export default router;