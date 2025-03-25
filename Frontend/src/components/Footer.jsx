import React from "react"
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  BookOpen
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8" />
              <span className="text-2xl font-bold">QuickQuill</span>
            </div>
            <p className="text-gray-300">
              Discover amazing stories, insights, and perspectives from writers
              around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Featured Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Write for Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Lifestyle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Travel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Food
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  Health
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <span>contact@QuickQuill.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-300" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-300" />
                <span>123 Blog Street, Content City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-700">
          <p className="text-center text-gray-300">
            © 2024 QuickQuill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
