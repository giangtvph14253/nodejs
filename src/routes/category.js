import { Router } from "express";
import { creat } from "../controllers/category";

const router = Router();
router.post('/category',creat);

export default router;