import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Utensils,
  Plane,
  Briefcase,
  Heart,
  Camera,
  Book,
  Music,
  Code,
  Trophy,
  Film,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Food & Cuisine",
      name:'food-cuisine',
      description:
        "Explore recipes, cooking tips, and culinary delights from around the globe.",
      image: "/images/food.jpg",
      color: "from-orange-600 to-red-600",
      icon: <Utensils className="h-8 w-8" />,
      tag: "Popular",
      ID: "67e27ae3c0a57517570d0be4",
    },
    {
      title: "Travel & Adventure",
      description:
        "Discover breathtaking destinations, travel guides, and adventure stories.",
      image: "/images/travel.jpg",
      color: "from-blue-600 to-indigo-600",
      icon: <Plane className="h-8 w-8" />,
      tag: "Trending",
      ID: "67e27afdc0a57517570d0be7",
      name:'travel-adventure',
    },
    {
      title: "Business & Finance",
      description:
        "Stay informed on market trends, investment strategies, and economic insights.",
      image: "/images/finance.jpg",
      color: "from-emerald-600 to-green-600",
      icon: <Briefcase className="h-8 w-8" />,
      tag: "Hot",
      ID: "67e27b0cc0a57517570d0bea",
      name:'Business-finance',
    },
    {
      title: "Lifestyle & Wellness",
      description:
        "Get tips for healthy living, mindfulness, and achieving work-life balance.",
      image: "/images/lifestyle.jpg",
      color: "from-pink-600 to-rose-600",
      icon: <Heart className="h-8 w-8" />,
      tag: "Featured",
      ID: "67e27b1dc0a57517570d0bed",
      name:'lifestyle-wellness',
    },
    {
      title: "Personal Development",
      description:
        "Empower yourself with advice and strategies for personal growth and success.",
      image: "/images/development_personal.jpg",
      color: "from-purple-600 to-indigo-600",
      icon: <Book className="h-8 w-8" />,
      tag: "New",
      ID: "67e27b31c0a57517570d0bf0",
      name:'personaldevelopment',
    },
    {
      title: "Education",
      description:
        "Expand your knowledge with courses, tutorials, and educational resources.",
      image: "/images/education.jpg",
      color: "from-yellow-600 to-orange-600",
      icon: <Book className="h-8 w-8" />,
      tag: "Popular",
      ID: "67e27b43c0a57517570d0bf3",
      name:'education',
    },
    {
      title: "Arts & Culture",
      description:
        "Immerse yourself in art, literature, music, and cultural experiences.",
      image: "/images/art.jpg",
      color: "from-violet-600 to-purple-600",
      icon: <Music className="h-8 w-8" />,
      tag: "Trending",
      ID: "67e27b54c0a57517570d0bf6",
      name:'arts-culture',
    },
    {
      title: "Technology",
      description:
        "Stay updated with the latest in tech, innovation, and digital trends.",
      image: "/images/technology.jpg",
      color: "from-cyan-600 to-blue-600",
      icon: <Code className="h-8 w-8" />,
      tag: "Hot",
      ID: "67e27b61c0a57517570d0bf9",
      name:'technology',
    },
    {
      title: "Entertainment & Pop Culture",
      description:
        "Catch up on celebrity news, movie reviews, and the latest in pop culture.",
      image: "/images/entertainment.jpg",
      color: "from-indigo-600 to-blue-600",
      icon: <Film className="h-8 w-8" />,
      tag: "Trending",
      ID: "67e27b6ec0a57517570d0bfc",
      name:'entertainment-popculture',
    },
    {
      title: "Sports & Recreation",
      description:
        "Get the latest updates on sports, fitness tips, and recreational activities.",
      image: "/images/sports.jpg",
      color: "from-red-600 to-orange-600",
      icon: <Trophy className="h-8 w-8" />,
      tag: "Popular",
      ID: "67e27b7ec0a57517570d0bff",
      name:'sports-recreation',
    },
  ];

  const navigate=useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Explore Our Categories
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover amazing content across various topics, curated just for
                you.
              </motion.p>
            </div>
          </div>
        </div>
{/* 
        <div className="flex justify-center items-center mt-10 -mb-5">
          <SearchBar />
        </div> */}

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50`}
                  ></div>
                </div>

                <div className="relative p-8 h-full min-h-[400px] flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      {category.icon}
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold">
                      {category.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {category.title}
                    </h3>
                    <p className="text-white/90 mb-6">{category.description}</p>

                    <button
                      className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full transition-all duration-300 transform group-hover:translate-x-2"
                      onClick={() =>
                        navigate(`/blog/categories/${category.name}`, {
                          state: { categoryId: category.ID },
                        })
                      }
                    >
                      <span>Explore {category.title}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-3xl p-12 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get notified about new articles in your favorite categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
                />
                <button className="px-8 py-3 rounded-full bg-white text-purple-900 font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
