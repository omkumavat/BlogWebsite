import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareBlog from "../components/ShareBlog"; // adjust the path as needed

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

  const blogUrl = window.location.href;

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-lg">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 mt-20 text-blue-600 hover:text-blue-800 transition-all duration-300 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg font-medium">Back</span>
        </button>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600 text-sm sm:text-base mb-6 bg-white p-4">
          <span>📝 <strong>Author:</strong> {blog.author?.name || "Unknown"}</span>
          <span>📅 <strong>Published on:</strong> {new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>

        <div className="mb-6 ml-10">
          <ShareBlog blogUrl={blogUrl} blogTitle={blog.title} />
        </div>

        {/* Blog Content */}
        <div
          className="text-gray-800 text-lg leading-relaxed bg-white p-6"
          style={{ fontFamily: 'Arial, sans-serif' }}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
