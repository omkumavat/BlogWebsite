import Blog from "../Model/Blog.js";

export const addBlog = async (req, res) => {
  try {
    const { title, content, authorid, categoryid } = req.body;

    if (!title || !content || !authorid || !categoryid) {
      return res.status(400).json({ message: "All fields are required", status: false });
    }
    const newBlog = new Blog({
      title,
      content,
      author:authorid,
      category:categoryid,
    });
    await newBlog.save();
    res.status(201).json({ message: "Blog added successfully", status: true, blog: newBlog });

  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};
