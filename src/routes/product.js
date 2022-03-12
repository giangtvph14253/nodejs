import { Router } from 'express';
import { get } from 'express/lib/response';
import { create, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth';

const router = Router();



router.get('/products', checkAuth, list);
router.post('/products', checkAuth, create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

export default router;