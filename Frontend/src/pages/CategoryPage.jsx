import React, { useState, useEffect } from "react";
import {
    Calendar,
    Clock,
    ChevronRight,
    Users,
    BookOpen,
    Bookmark,
    TrendingUp,
    Utensils,
    Plane,
    Briefcase,
    Heart,
    Book,
    Music,
    Code,
    Film,
    Trophy
} from "lucide-react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        tags: ["Recipes", "Cooking", "Culinary"]
    },
    {
        title: "Travel & Adventure",
        name: "travel-adventure",
        description:
            "Discover breathtaking destinations, travel guides, and adventure stories.",
        image: "/images/travel.jpg",
        color: "from-blue-600 to-indigo-600",
        icon: <Plane className="h-8 w-8" />,
        tag: "Trending",
        ID: "67e27afdc0a57517570d0be7",
        tags: ["Destinations", "Guides", "Adventure"]
    },
    {
        title: "Business & Finance",
        name: "Business-finance",
        description:
            "Stay informed on market trends, investment strategies, and economic insights.",
        image: "/images/finance.jpg",
        color: "from-emerald-600 to-green-600",
        icon: <Briefcase className="h-8 w-8" />,
        tag: "Hot",
        ID: "67e27b0cc0a57517570d0bea",
        tags: ["Market", "Investments", "Economy"]
    },
    {
        title: "Lifestyle & Wellness",
        name: "lifestyle-wellness",
        description:
            "Get tips for healthy living, mindfulness, and achieving work-life balance.",
        image: "/images/lifestyle.jpg",
        color: "from-pink-600 to-rose-600",
        icon: <Heart className="h-8 w-8" />,
        tag: "Featured",
        ID: "67e27b1dc0a57517570d0bed",
        tags: ["Health", "Mindfulness", "Balance"]
    },
    {
        title: "Personal Development",
        name: "personaldevelopment",
        description:
            "Empower yourself with advice and strategies for personal growth and success.",
        image: "/images/development_personal.jpg",
        color: "from-purple-600 to-indigo-600",
        icon: <Book className="h-8 w-8" />,
        tag: "New",
        ID: "67e27b31c0a57517570d0bf0",
        tags: ["Growth", "Success", "Motivation"]
    },
    {
        title: "Education",
        name: "education",
        description:
            "Expand your knowledge with courses, tutorials, and educational resources.",
        image: "/images/education.jpg",
        color: "from-yellow-600 to-orange-600",
        icon: <Book className="h-8 w-8" />,
        tag: "Popular",
        ID: "67e27b43c0a57517570d0bf3",
        tags: ["Learning", "Courses", "Tutorials"]
    },
    {
        title: "Arts & Culture",
        name: "arts-culture",
        description:
            "Immerse yourself in art, literature, music, and cultural experiences.",
        image: "/images/art.jpg",
        color: "from-violet-600 to-purple-600",
        icon: <Music className="h-8 w-8" />,
        tag: "Trending",
        ID: "67e27b54c0a57517570d0bf6",
        tags: ["Art", "Music", "Culture"]
    },
    {
        title: "Technology",
        name: "technology",
        description:
            "Stay updated with the latest in tech, innovation, and digital trends.",
        image: "/images/technology.jpg",
        color: "from-cyan-600 to-blue-600",
        icon: <Code className="h-8 w-8" />,
        tag: "Hot",
        ID: "67e27b61c0a57517570d0bf9",
        tags: ["Gadgets", "Innovations", "Digital"]
    },
    {
        title: "Entertainment & Pop Culture",
        name: "entertainment-popculture",
        description:
            "Catch up on celebrity news, movie reviews, and the latest in pop culture.",
        image: "/images/entertainment.jpg",
        color: "from-indigo-600 to-blue-600",
        icon: <Film className="h-8 w-8" />,
        tag: "Trending",
        ID: "67e27b6ec0a57517570d0bfc",
        tags: ["Movies", "Music", "Celebs"]
    },
    {
        title: "Sports & Recreation",
        name: "sports-recreation",
        description:
            "Get the latest updates on sports, fitness tips, and recreational activities.",
        image: "/images/sports.jpg",
        color: "from-red-600 to-orange-600",
        icon: <Trophy className="h-8 w-8" />,
        tag: "Popular",
        ID: "67e27b7ec0a57517570d0bff",
        tags: ["Fitness", "Sports", "Wellness"]
    }
];

const ITEMS_PER_PAGE = 6;

function CategoryPage() {
    const { catname } = useParams();
    const location = useLocation();
    const categoryId = location.state?.categoryId;

    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate=useNavigate();

    // Find category info based on the catname param.
    const categoryInfo =
        categories.find((cat) => cat.name.toLowerCase() === catname.toLowerCase()) || {
            title: "Category",
            description: "Default description for this category.",
            color: "from-gray-600 to-gray-800",
            tags: []
        };

    // Fetch blogs for the given category from the backend.
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Adjust this endpoint as per your backend implementation.
                const response = await fetch(
                    `http://localhost:4000/server/category/getcategorybyid/${categoryId}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                const data = await response.json();
                setBlogs(data.blogs);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        if (categoryId) {
            fetchBlogs();
        }
    }, [categoryId]);

    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Helper function to strip HTML tags and extract plain text
    const getPlainText = (htmlString) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = htmlString;
        return tmp.textContent || tmp.innerText || "";
    };

    const excerptLimit = 150;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Category Header with dynamic dummy info */}
                <div className="bg-white border-b">
                    <div className="max-w-4xl mx-auto px-4 py-16">
                        <div
                            className={`text-5xl font-bold mb-5 mt-20 p-5 bg-gradient-to-r ${categoryInfo.color} bg-clip-text text-transparent`}
                        >
                            {categoryInfo.title}
                        </div>
                        <p className="text-xl text-gray-600 max-w-2xl">
                            {categoryInfo.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {categoryInfo.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Blog List */}
                <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Grid layout with two blogs per row on md+ screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {currentBlogs.length > 0 ? (
                            currentBlogs.map((blog) => {
                                const plainText = getPlainText(blog.content);
                                const isTruncated = plainText.length > excerptLimit;
                                const excerpt = isTruncated
                                    ? plainText.substring(0, excerptLimit) + "..."
                                    : plainText;
                                return (
                                    <div
                                        key={blog._id}
                                        className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3 text-gray-900">
                                            {blog.title}
                                        </h2>
                                        <div className="text-gray-600">
                                            <p>{excerpt}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-900">
                                                    {blog.author?.name}
                                                </span>
                                            </div>
                                            {isTruncated && (
                                                <button className="text-blue-600 hover:text-blue-800 inline-block mt-2"
                                                onClick={()  => {
                                                    navigate(`/blog/${blog._id}`,{state:{blog}})
                                                }}>
                                                    Read More →
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <h2>No Blogs Found in this Category!</h2>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12 gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`px-4 py-2 rounded-md transition-colors ${currentPage === index + 1
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100 border"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CategoryPage;
