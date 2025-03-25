import React, { createContext, useContext, useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AuthForm from "./pages/AuthForm"

function App() {
 
  return (
     <>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<AuthForm />} />
          </Routes>
       </>
  )
}

export default App
