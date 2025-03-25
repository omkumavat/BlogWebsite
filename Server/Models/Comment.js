import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
},{timestamp:true});

export default mongoose.model("Comment", CommentSchema);
