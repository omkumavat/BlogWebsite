import Blog from "../Models/Blog.js";
import User from "../Models/User.js";
import Category from "../Models/Category.js";



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


export const getBlogsByCategoryId = async (req, res) => {
    try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) {
        return res.status(404).json({ message: "Category not found", status: false });
    }
    const blogs = await Blog.find({ category: categoryId }).populate("author", "name email");
    res.status(200).json({ message: "Blogs fetched successfully", status: true, blogs });
    } catch (error) {
      console.error("Error fetching blogs by category ID:", error);
      res.status(500).json({ message: "Internal Server Error", status: false });
    }
  };
  