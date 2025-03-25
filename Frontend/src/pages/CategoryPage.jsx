import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ChevronRight,
  Users,
  BookOpen,
  Bookmark,
  TrendingUp
} from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy data to show attractive info about the category.
// You can later replace this with dynamic content if needed.
const categoryDummyInfo = {
  title: "Technology",
  description:
    "Dive into the latest in technology, innovation, and digital trends. Stay ahead with expert insights and groundbreaking discoveries.",
  tags: ["AI", "Machine Learning", "Cloud Computing", "Cybersecurity"]
};

const ITEMS_PER_PAGE = 6;

function CategoryPage() {
  const {catname}=useParams();
 const location=useLocation();
 const categoryId=location.state?.categoryId;
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blogs for the given category from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Update the endpoint as per your backend implementation
        const response = await fetch(`http://localhost:4000/server/category/getcategorybyid/${categoryId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [categoryId]);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <><Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Category Header with dummy info tags */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {categoryDummyInfo.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            {categoryDummyInfo.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categoryDummyInfo.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Use grid layout with two blogs per row on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentBlogs.map(blog => (
            <div
              key={blog._id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    {/* {blog.author.name} */}
                  </span>
                  <span className="text-sm text-gray-500">
                    {/* {blog.author.role} */}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium">
                  Read article <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CategoryPage;
