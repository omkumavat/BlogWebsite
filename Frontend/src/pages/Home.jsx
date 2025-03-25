import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Pen,
  Share2,
  BookOpen,
  Users,
  MessageSquare,
  Globe2,
  Sparkles,
  Zap,
  Rocket,
  Target,
  TrendingUp,
  Heart,
  Coffee,
  Star,
  Laptop
} from "lucide-react"

const Home = ()  => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                Share Your Story With The World
              </h1>
              <p className="text-xl text-gray-300 animate-fade-in-delay">
                Join our community of writers and readers. Discover stories that
                inspire, educate, and entertain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
                <button className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105">
                  <span>Start Reading</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-transparent border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
                alt="Blog Hero"
                className="rounded-lg shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unleash Your Creative Potential
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the freedom to express yourself without boundaries. Our
              platform provides everything you need to create, share, and grow.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <Pen className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Powerful Writing Tools
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Write with confidence using our intuitive editor. Format
                    your content beautifully, add images, embed media, and
                    create engaging stories that captivate your readers.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Sparkles className="h-5 w-5 text-purple-500 mr-3" />
                      Rich text formatting
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Globe2 className="h-5 w-5 text-purple-500 mr-3" />
                      Multi-language support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MessageSquare className="h-5 w-5 text-purple-500 mr-3" />
                      Collaborative editing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e"
                  alt="Writing Tools"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <Share2 className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Seamless Sharing</h3>
                  <p className="text-gray-600 mb-6">
                    Share your stories instantly with readers worldwide. Our
                    platform makes it easy to reach your audience and grow your
                    following.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Users className="h-5 w-5 text-purple-500 mr-3" />
                      Built-in community features
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Zap className="h-5 w-5 text-purple-500 mr-3" />
                      Instant publishing
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Globe2 className="h-5 w-5 text-purple-500 mr-3" />
                      Global reach
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                  alt="Sharing Platform"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide all the tools and features you need to create, grow,
              and monetize your blog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold mb-4">
                  Create Without Limits
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Unlimited blog posts</li>
                  <li>• Custom domains</li>
                  <li>• Advanced formatting</li>
                  <li>• Media integration</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <Users className="h-10 w-10 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold mb-4">Grow Your Audience</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• SEO optimization</li>
                  <li>• Social sharing</li>
                  <li>• Newsletter integration</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <Zap className="h-10 w-10 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold mb-4">
                  Monetize Your Content
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Premium subscriptions</li>
                  <li>• Sponsored content tools</li>
                  <li>• Affiliate marketing</li>
                  <li>• Direct tip system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-100 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, grow, and monetize your blog in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Rocket className="h-8 w-8" />, title: "Quick Start", desc: "Get your blog up and running in minutes" },
              { icon: <Target className="h-8 w-8" />, title: "SEO Tools", desc: "Optimize your content for search engines" },
              { icon: <TrendingUp className="h-8 w-8" />, title: "Analytics", desc: "Track your growth and engagement" },
              { icon: <Heart className="h-8 w-8" />, title: "Community", desc: "Connect with like-minded writers" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-800 rounded-3xl overflow-hidden">
            <div className="px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-white mb-8 md:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Blogging Journey Today</h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Join our community of writers and start sharing your stories with the world.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Get Started Free
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200">
                      View Plans
                    </button>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                      <Coffee className="h-8 w-8 text-purple-300 mb-2" />
                      <h4 className="text-white font-semibold">Write Anywhere</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                      <Star className="h-8 w-8 text-purple-300 mb-2" />
                      <h4 className="text-white font-semibold">Premium Features</h4>
                    </div>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                      <Users className="h-8 w-8 text-purple-300 mb-2" />
                      <h4 className="text-white font-semibold">Growing Community</h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-xl">
                      <Laptop className="h-8 w-8 text-purple-300 mb-2" />
                      <h4 className="text-white font-semibold">Easy to Use</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of writers who have already found their voice on
            QuickQuill.
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
            Start Writing Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
