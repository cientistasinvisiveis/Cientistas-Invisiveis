import { Router } from 'express';
import { listarPesquisadores } from '../controllers/pesquisadorController.js';

const router = Router();

router.get('/', listarPesquisadores);

export default router;