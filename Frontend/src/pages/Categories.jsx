import React from "react";
import {
  ArrowRight,
  Utensils,
  Plane,
  Briefcase,
  Heart,
  Book,
  Music,
  Code,
  Trophy,
  Film,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Food & Cuisine",
      name: "food-cuisine",
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
      name: "travel-adventure",
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
      name: "Business-finance",
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
      name: "lifestyle-wellness",
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
      name: "personaldevelopment",
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
      name: "education",
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
      name: "arts-culture",
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
      name: "technology",
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
      name: "entertainment-popculture",
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
      name: "sports-recreation",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Explore Our Categories
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover amazing content across various topics, curated just for
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="group relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    // loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110"
                    style={{ backgroundColor: "#f0f0f0" }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50`}></div>
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
                    <h3 className="text-2xl font-bold mb-3 text-white">{category.title}</h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
