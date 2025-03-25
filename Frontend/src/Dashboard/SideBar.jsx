import React from "react"
import { PenSquare, BookOpen, X } from "lucide-react"

const Sidebar = ({ isOpen, toggleSidebar, setCurrentView, currentView }) => {
  const menuItems = [
    { icon: PenSquare, label: "Add Blog", value: "add-blog" },
    { icon: BookOpen, label: "My Blogs", value: "my-blogs" }
  ]

  return (
    <div
      className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-blue-900 text-white transform transition-transform mt-5 duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between mt-20 p-4 border-b border-blue-800">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-white hover:text-blue-200"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="mt-6">
        {menuItems.map(item => {
          const Icon = item.icon
          return (
            <button
              key={item.value}
              onClick={() => setCurrentView(item.value)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-800 transition-colors ${
                currentView === item.value ? "bg-blue-800" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
