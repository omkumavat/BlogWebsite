import express from "express";
import { addCategory, getcatnames,getBlogsByCategoryId } from "../Controllers/Category.js";

const router = express.Router();

router.post("/add", addCategory); 
router.get("/getcategoryname", getcatnames); 
router.get('/getcategorybyid/:categoryId',getBlogsByCategoryId)

export default router;
