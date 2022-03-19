import { Router } from "express";
import { creat, read } from "../controllers/category";

const router = Router();
router.post('/category', creat);
router.get("/category/:id", read);

export default router;  