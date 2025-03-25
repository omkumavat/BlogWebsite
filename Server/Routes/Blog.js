import express from "express";
import { addBlog } from "../Controllers/Blog.js";

const router = express.Router();

router.post("/addblog", addBlog); 

export default router;