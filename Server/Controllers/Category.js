import Blog from "../Models/Blog.js";
import User from "../Models/User.js";
import Category from "../Models/Category.js";
import Comment from "../Models/Comment.js";

export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Category name is required", status: false });
    }
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists", status: false });
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({ message: "Category added successfully", status: true, category: newCategory });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};


export const getcatnames = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: "Categories fetched successfully", status: true, categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Internal Server Error", status: false });
  }
};
