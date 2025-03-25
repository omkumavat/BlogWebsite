import React from "react"
import { Edit, Trash2 } from "lucide-react"

// Mock data for demonstration
const mockBlogs = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    category: "Technology",
    excerpt:
      "Learn how to set up a new project with React and TypeScript from scratch...",
    publishedDate: "2024-03-15"
  },
  {
    id: 2,
    title: "The Art of Modern Web Design",
    category: "Design",
    excerpt:
      "Explore the principles and practices that make modern web design effective...",
    publishedDate: "2024-03-14"
  }
  // Add more mock blogs as needed
]

const MyBlogs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Blog Posts</h1>

      <div className="grid gap-6">
        {mockBlogs.map(blog => (
          <article
            key={blog.id}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {blog.category}
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{blog.excerpt}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Published on {blog.publishedDate}</span>
              <button className="text-blue-600 hover:text-blue-800">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default MyBlogs
