import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "./SideBar"
import { Menu } from "lucide-react"
import Navbar from "../components/Navbar"

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleViewChange = view => {
    navigate(view)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm p-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-900 mt-20"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setCurrentView={handleViewChange}
          currentView={location.pathname.split("/").pop() || "add-blog"}
        />

        {/* Main Content */}
        <main className="flex-1 p-0 lg:p-8 mt-20">
          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
    </>
  )
}

export default Dashboard
