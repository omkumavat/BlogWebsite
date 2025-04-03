import React, { useState, useEffect } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const MyBlogs = () => {
  const { currentUser } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  // For delete modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  // For expand/collapse read more
  const [expandedBlogs, setExpandedBlogs] = useState({});

  // Fetch blogs for current user when component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      if (!currentUser || !currentUser.userId) return;
      setLoading(true);
      try {
        // Adjust your endpoint accordingly
        const response = await axios.get(
          `http://localhost:4000/server/user/getuserblogs/${currentUser.userId}`
        );
        // Assuming response.data.blogs is the array of blog posts
        setBlogs(response.data.blogs);
        // console.log(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentUser]);

  // Handler to open delete modal
  const handleDeleteClick = (blog) => {
    setSelectedBlog(blog);
    setDeleteConfirmText("");
    setDeleteModalOpen(true);
  };

  // Delete confirmation handler
  const handleConfirmDelete = async () => {
    if (deleteConfirmText.trim().toLowerCase() !== "delete") {
      toast.error('Please type "delete" to confirm');
      return;
    }
    try {
      // Replace with your actual delete endpoint, e.g., DELETE /blogs/:id
      await axios.delete(`http://localhost:4000/server/blog/delete/${selectedBlog._id}`);
      toast.success("Blog deleted successfully");
      setBlogs((prev) => prev.filter((b) => b._id !== selectedBlog._id));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Delete blog error:", error);
      toast.error("Failed to delete blog");
    }
  };

  // Toggle read more for a blog by id
  const toggleExpand = (blogId) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8">My Blog Posts</h1>

      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="grid gap-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <article
                key={blog._id}
                className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {blog.title}
                    </h2>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {blog.category?.name}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDeleteClick(blog)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <div
                    className={`text-gray-600 ${
                      expandedBlogs[blog._id]
                        ? ""
                        : "max-h-40 overflow-hidden"
                    }`}
                    // Render the blog content as HTML so that formatting is preserved.
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  {/* Always show the toggle button if the content is longer than the collapsed height */}
                  <button
                    onClick={() => toggleExpand(blog._id)}
                    className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  >
                    {expandedBlogs[blog._id] ? "Read Less" : "Read More →"}
                  </button>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Published on {blog.updatedAt}</span>
                </div>
              </article>
            ))
          ) : (
            <h2>No Blogs Found!</h2>
          )}
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-4">
              Type <span className="font-semibold">delete</span> to confirm deletion of this blog post.
            </p>
            <input
              type="text"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Type delete to confirm"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
