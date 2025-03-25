import express from "express";
import { addCategory, getcatnames } from "../Controllers/Category.js";

const router = express.Router();

router.post("/add", addCategory); 
router.get("/getcategoryname", getcatnames); 

export default router;
