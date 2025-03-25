import React, { createContext, useContext, useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AuthForm from "./pages/AuthForm"
import Categories from "./pages/Categories"

function App() {
 
  return (
     <>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/blog/categories" element={<Categories />} />
          </Routes>
       </>
  )
}

export default App
