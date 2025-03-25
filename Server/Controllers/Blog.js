import Blog from "../Models/Blog.js";
import User from "../Models/User.js";
import Category from "../Models/Category.js";
import Comment from "../Models/Comment.js";

export const addBlog = async (req, res) => {
  try {
    const { title, content, authorid, categoryid } = req.body;

    if (!title || !content || !authorid || !categoryid) {
      return res.status(400).json({ message: "All fields are required", status: false });
    }
    const category = await Category.findById(categoryid);
    if (!category) {
      return res.status(404).json({ message: "Category not found", status: false });
    }
    const user = await User.findById(authorid);
    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    const newBlog = new Blog({
      title,
      content,
      author:authorid,
      category:categoryid,
    });
    await newBlog.save();
    category.blogs.push(newBlog._id);
    await category.save();
    user.blogs.push(newBlog._id);
    await user.save();

    res.status(201).json({ message: "Blog added successfully", status: true, blog: newBlog });

  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};