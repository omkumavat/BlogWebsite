import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }] 
}, { timestamps: true }); 

const Category = mongoose.model("Category", CategorySchema);
export default Category;
