import express from "express";
import { addBlog,deleteBlog} from "../Controllers/Blog.js";

const router = express.Router();

router.post("/addblog", addBlog); 
router.delete("/blogs/:blogId", deleteBlog);

export default router;