import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mt-10 p-4 bg-white">
      {/* Main Container */}
      <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Text Section with Vertical Divider */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
            <p className="text-lg text-gray-600 text-center">
              Join our community of writers and readers. Share your stories, ideas,
              and connect with like-minded people.
            </p>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="lg:w-1/2 flex flex-col p-8">
            {/* Form Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {isLogin ? "Welcome back" : "Create an account"}
              </h1>
              <p className="mt-2 text-gray-600">
                {isLogin
                  ? "Please enter your details to sign in"
                  : "Please enter your details to get started"}
              </p>
            </div>

            {/* Auth Form */}
            {isLogin ? (
              <Login onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
              <Signup onSwitchToLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Below Section - Dummy Text and Images */}
      <div className="mt-12 max-w-4xl w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Discover More</h2>
        <p className="mb-8 text-gray-700">
          Explore our community and get inspired by the stories shared by our members.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">
            <img
              src="https://via.placeholder.com/150"
              alt="dummy 1"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-gray-600">Image 1</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <img
              src="https://via.placeholder.com/150"
              alt="dummy 2"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-gray-600">Image 2</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <img
              src="https://via.placeholder.com/150"
              alt="dummy 3"
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-gray-600">Image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
