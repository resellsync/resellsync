
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParallaxSection } from '@/components/ui/ParallaxSection';

const posts = [
  {
    title: 'How to Maximize Profits in Phone Reselling',
    excerpt: 'Discover proven strategies to increase your margins and grow your phone reselling business with ResellSync tools.',
    date: 'June 1, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    category: 'Strategy'
  },
  {
    title: 'Inventory Management Tips for Resellers',
    excerpt: 'Learn how to keep your inventory organized, avoid double-selling, and automate your workflow for efficiency.',
    date: 'May 20, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    category: 'Management'
  },
  {
    title: 'Connecting to Marketplaces: A Step-by-Step Guide',
    excerpt: 'A simple guide to syncing your listings and orders with eBay, Swappa, Back Market, and more.',
    date: 'May 10, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    category: 'Integration'
  },
  {
    title: 'How to Determine Fair Market Value for Used Phones',
    excerpt: 'Use these pricing strategies to accurately value and competitively price your phone inventory.',
    date: 'May 5, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=600&q=80',
    category: 'Pricing'
  },
  {
    title: 'Phone Testing Procedures Every Reseller Should Know',
    excerpt: 'Learn the essential tests and checks to ensure quality control for all your refurbished devices.',
    date: 'April 28, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80',
    category: 'Quality'
  }
];

const categories = ['All', 'Strategy', 'Management', 'Integration', 'Pricing', 'Quality'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  
  useEffect(() => {
    let result = posts;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-brand-blue/5 via-brand-teal/5 to-brand-green/5 py-16">
          <ParallaxSection className="container-section max-w-5xl mx-auto" baseVelocity={0.1}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A090C] mb-4 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-green text-transparent bg-clip-text">ResellSync Blog</h1>
              <p className="text-lg text-[#0A090C] opacity-80 mb-6 max-w-2xl mx-auto">
                Insights, tips, and updates for phone resellers. Stay up to date with the latest from ResellSync.
              </p>
              
              {/* Search bar */}
              <div className="relative max-w-lg mx-auto mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Category filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-[#0A090C] text-white'
                        : 'bg-white text-[#0A090C] hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </ParallaxSection>
        </div>

        <div className="container-section max-w-5xl mx-auto py-12">
          {/* Featured Post */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-56 md:h-auto relative overflow-hidden">
                  <motion.img 
                    src={filteredPosts[0]?.image} 
                    alt={filteredPosts[0]?.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-4 left-4 bg-[#0A090C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {filteredPosts[0]?.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-[#0A090C] mb-2 group-hover:text-brand-teal transition-colors">
                    {filteredPosts[0]?.title}
                  </h2>
                  <p className="text-[#0A090C] opacity-80 mb-4">{filteredPosts[0]?.excerpt}</p>
                  
                  <div className="flex gap-4 text-sm text-[#0A090C] opacity-60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredPosts[0]?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{filteredPosts[0]?.author}</span>
                    </div>
                  </div>
                  
                  <Button className="mt-2 w-max group bg-[#0A090C] hover:bg-[#222] text-white">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPosts.slice(1).map((post, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-[#0A090C] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0A090C] mb-2 group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#0A090C] opacity-80 mb-4 flex-1">{post.excerpt}</p>
                  
                  <div className="flex gap-4 text-sm text-[#0A090C] opacity-60 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Button className="mt-auto w-max group bg-[#0A090C] hover:bg-[#222] text-white">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-medium text-[#0A090C]">No articles found</h3>
              <p className="text-[#0A090C] opacity-70 mt-2">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
