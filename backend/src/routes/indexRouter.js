import { Router } from 'express';
import { renderIndex } from '../controllers/homeController.js'

const router = Router();


router.get('/', renderIndex);

module.exports = router;