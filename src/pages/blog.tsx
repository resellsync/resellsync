import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  {
    title: 'How to Maximize Profits in Phone Reselling',
    excerpt: 'Discover proven strategies to increase your margins and grow your phone reselling business with ResellSync tools.',
    date: 'June 1, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Inventory Management Tips for Resellers',
    excerpt: 'Learn how to keep your inventory organized, avoid double-selling, and automate your workflow for efficiency.',
    date: 'May 20, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Connecting to Marketplaces: A Step-by-Step Guide',
    excerpt: 'A simple guide to syncing your listings and orders with eBay, Swappa, Back Market, and more.',
    date: 'May 10, 2024',
    author: 'ResellSync Team',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container-section max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A090C] mb-4 text-center">ResellSync Blog</h1>
          <p className="text-lg text-[#0A090C] opacity-80 mb-12 text-center max-w-2xl mx-auto">
            Insights, tips, and updates for phone resellers. Stay up to date with the latest from ResellSync.
          </p>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="w-full md:w-1/3 h-56 object-cover" />
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#0A090C] mb-2">{posts[0].title}</h2>
                <p className="text-[#0A090C] opacity-80 mb-4">{posts[0].excerpt}</p>
                <div className="text-sm text-[#0A090C] opacity-60 mb-2">By {posts[0].author} • {posts[0].date}</div>
                <button className="mt-2 px-4 py-2 bg-[#0A090C] text-white rounded-lg font-semibold w-max hover:bg-[#222] transition">Read More</button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#0A090C] mb-2">{post.title}</h3>
                  <p className="text-[#0A090C] opacity-80 mb-4 flex-1">{post.excerpt}</p>
                  <div className="text-sm text-[#0A090C] opacity-60 mb-2">By {post.author} • {post.date}</div>
                  <button className="mt-auto px-4 py-2 bg-[#0A090C] text-white rounded-lg font-semibold w-max hover:bg-[#222] transition">Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog; 