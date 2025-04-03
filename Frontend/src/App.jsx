import React, { createContext, useContext, useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import AuthForm from "./pages/AuthForm"
import Categories from "./pages/Categories"
import Dashboard from "./Dashboard/Dashboard"
import AddBlog from "./Dashboard/AddBlog"
import MyBlogs from "./Dashboard/MyBlogs"
import CategoryPage from "./pages/CategoryPage";
import FullBlog from './pages/FullBlog';
import About from "./pages/About"

function App() {
  const Navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/categories" element={<Categories />} />
        <Route path="/blog/categories/:catname" element={<CategoryPage />} />
        <Route path="/blog/:id" element={<FullBlog />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="add-blog" replace />} />
        <Route path="add-blog" element={<AddBlog />} />
        <Route path="my-blogs" element={<MyBlogs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
