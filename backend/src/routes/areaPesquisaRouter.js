import { Router } from 'express';
import { renderAreaPesquisa } from '../controllers/areaPesquisaController.js';

const router = Router();

router.get('/area-pesquisa', renderAreaPesquisa);

export default router;