import express from "express";
import { addBlog,deleteBlog,getBlogById} from "../Controllers/Blog.js";

const router = express.Router();

router.post("/addblog", addBlog); 
router.delete("/delete/:blogId", deleteBlog);
router.get("/getblogbyid/:id", getBlogById);

export default router;