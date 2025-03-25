import React, { useState } from "react"
import {
  Calendar,
  Clock,
  ChevronRight,
  Users,
  BookOpen,
  Bookmark,
  TrendingUp
} from "lucide-react"

const blogs = [
  {
    id: "1",
    title: "The Future of Artificial Intelligence in 2024",
    description:
      "Exploring how AI is reshaping our world and what to expect in the coming years. From machine learning breakthroughs to ethical considerations, we dive deep into the future of AI.",
    content: "Full content here...",
    author: {
      name: "John Doe",
      role: "AI Researcher"
    },
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Future Tech"]
  },
  {
    id: "2",
    title: "Understanding Quantum Computing Basics",
    description:
      "A comprehensive guide to quantum computing fundamentals. Learn about qubits, quantum gates, and the potential impact on computational problems.",
    content: "Full content here...",
    author: {
      name: "Sarah Smith",
      role: "Quantum Physicist"
    },
    date: "2024-03-14",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Quantum Computing", "Physics", "Technology"]
  }
]

const categoryStats = {
  totalAuthors: 15,
  totalReads: 25000,
  avgReadTime: "6 minutes",
  topTags: ["AI", "Machine Learning", "Cloud Computing", "Cybersecurity"]
}

const ITEMS_PER_PAGE = 6

function CategoryPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Explore the latest in tech innovations, software development, and
            digital trends. Stay ahead of the curve with insights from industry
            experts and thought leaders.
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {currentBlogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">
                    {blog.author.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {blog.author.role}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium">
                  Read article <ChevronRight size={16} />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
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

        {/* Category Stats */}
        <div className="mt-20 bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Category Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {categoryStats.totalAuthors}
                  </div>
                  <div className="text-sm text-gray-500">Expert Authors</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {categoryStats.totalReads.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">Total Reads</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {categoryStats.avgReadTime}
                  </div>
                  <div className="text-sm text-gray-500">Avg. Read Time</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {categoryStats.topTags.length}
                  </div>
                  <div className="text-sm text-gray-500">Trending Topics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Popular Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryStats.topTags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage;