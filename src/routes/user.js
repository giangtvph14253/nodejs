import { Router } from "express";
import { create } from "../controllers/product";
import { isAuth, requiredSigin } from "../middlewares/checkAuth";

const router = Router();

router.post('/user', requiredSigin, isAuth, create);

export default router;