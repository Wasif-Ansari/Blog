"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Blogs() { 

    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog posts');
                }
                const data = await response.json();
                setBlogPosts(data);
            } catch (err) {
                console.log(err);
                setError('Failed to fetch blog posts');
            } finally {
                setLoading(false);
            }
        };
        fetchBlogPosts();
    }, []);

    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="min-h-screen text-white px-4 flex flex-col items-center justify-center bg-gray-900">
      <section className="py-12 md:py-24 w-full max-w-4xl">
        <ul  className="text-white space-y-6">
          {blogPosts.slice().reverse().map((post) => (
            <li key={post.id} >
              <Link href={`/blogs/${post.id}`} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:scale-105 transform-gpu block">
               <div className="flex flex-col items-center justify-center">
                {post.image && <img src={post.image} width={50} height={50} alt={post.title} className="rounded-full mb-4" />}
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-300">{post.content}</p>
                </div>
               </div>  
              </Link>
               
             
            </li>
            
          ))}

        </ul>
      </section>
    </div>
  );
}


