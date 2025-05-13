"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
export default function Home() {
  const blogPosts = [
    {
      title: "Blog Post 1",
      image: "/vercel.svg",
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",

    },
    {
      title: "Blog Post 2",
      image: "/next.svg",
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
      title: "Blog Post 3",
      image: "/globe.svg",
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
      title: "Blog Post 1",
      image: "/vercel.svg",
      id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
      title: "Blog Post 2",
      image: "/next.svg",
      id: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
    {
      title: "Blog Post 3",
      image: "/globe.svg",
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen px-4">
      {/* Hero Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/window.svg')`,
            zIndex: 0,
          }}
        />
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="text-blue-400">Explore</span> the Future of
                <span className="text-purple-400"> Tech</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Dive into a world of cutting-edge innovation and discovery.
                Explore the latest trends, insights, and breakthroughs shaping
                our future.
              </p>
              <Link
                href="/blogs"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg self-start transition duration-300 ease-in-out"
              >
                Begin Your Journey
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/file.svg"
                alt="Future Tech Image"
                width={400}
                height={400}
                className="w-full max-w-md h-auto animate-pulse"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black z-0"></div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl -z-10 opacity-20"></div>
      </div>


      {/* Public Blogs Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Trending Now ..
          </h2>
          <div className="mb-8 relative flex justify-center">
            <input
              type="text"
              placeholder="Search blog posts..." className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />


          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredBlogPosts.length > 0 ? (
              filteredBlogPosts.map((post, index) => (
                <div
                  key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                    priority
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No blogs found.</p>
            )}

          </div>
          {/* Read More Button */}
          <div className="flex justify-center mt-8">
            <Link href="/blogs" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              Read More -&gt;
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}


