import React from "react"
import { Menu, X, Search, BookOpen, User } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-900 to-indigo-800 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-2xl font-bold">QuickQuill</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/blog/categories"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              Categories
            </a>
            <a
              href="/about"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              About
            </a>
            {
              currentUser && (
                <a
                  href="/dashboard"
                 className="hover:text-purple-300 transition-colors duration-200"
                >
                  DashBoard
                </a>
              )
            }
            {
              currentUser ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                    <User className="h-5 w-5" />
                    <span>LogOut</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { navigate('/login') }}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                    <User className="h-5 w-5" />
                    <span>Sign In</span>
                  </button>
                </>
              )
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-purple-800"
              >
                Home
              </a>
              <a
                href="/blog/categories"
                className="block px-3 py-2 rounded-md hover:bg-purple-800"
              >
                Categories
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md hover:bg-purple-800"
              >
                About
              </a>
              {
                currentUser && (
                  <a
                    href="/dashboard"
                    className="hover:text-purple-300 transition-colors duration-200"
                  >
                    DashBoard
                  </a>
                )
              }
              {
                currentUser ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                      <User className="h-5 w-5" />
                      <span>LogOut</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => { navigate('/login') }}
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors duration-200">
                      <User className="h-5 w-5" />
                      <span>Sign In</span>
                    </button>
                  </>
                )
              }
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
