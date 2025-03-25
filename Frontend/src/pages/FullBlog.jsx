import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog; 

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold text-gray-700">Blog Not Found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 shadow-lg rounded-lg">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-300 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-lg font-medium">Back</span>
      </button>

      {/* Blog Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        {blog.title}
      </h1>

      {/* Blog Meta Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm sm:text-base mb-6 bg-gray-100 p-4 rounded-lg">
        <span>📝 <strong>Author:</strong> {blog.author?.name || "Unknown"}</span>
        <span>📅 <strong>Published on:</strong> {new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Blog Content */}
      <div className="text-gray-800 text-lg leading-relaxed bg-white p-6 rounded-lg shadow-md">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
