import Blog from "../Models/Blog.js";
import User from "../Models/User.js";
import Category from "../Models/Category.js";

export const addBlog = async (req, res) => {
  try {
    const { title, content, authorid, categoryid } = req.body;

    if (!title || !content || !authorid || !categoryid) {
      return res
        .status(400)
        .json({ message: "All fields are required", status: false });
    }
    const category = await Category.findById(categoryid);
    if (!category) {
      return res
        .status(404)
        .json({ message: "Category not found", status: false });
    }
    const user = await User.findById(authorid);
    if (!user) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    const newBlog = new Blog({
      title,
      content,
      author: authorid,
      category: categoryid,
    });
    await newBlog.save();
    category.blogs.push(newBlog._id);
    await category.save();
    user.blogs.push(newBlog._id);
    await user.save();

    res
      .status(201)
      .json({
        message: "Blog added successfully",
        status: true,
        blog: newBlog,
      });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found", status: false });
    }
    await User.findByIdAndUpdate(blog.author, { $pull: { blogs: blogId } });
    
    await Category.findByIdAndUpdate(blog.category, {
      $pull: { blogs: blogId },
    });
    await Blog.findByIdAndDelete(blogId);
    res
      .status(200)
      .json({ message: "Blog deleted successfully", status: true });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await Blog.findById(id).populate('author');
console.log(blog);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};
