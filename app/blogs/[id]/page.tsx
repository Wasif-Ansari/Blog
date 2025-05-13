"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from "react";

interface BlogPost {
    id: number;
    title: string;
    image: string;
    content: string;
}

export default function BlogView() {
     const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);


    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleAddCommentClick = () => {
        setIsCommentOpen(!isCommentOpen);
    };

    const handleCommentSubmit = () => {
        if (comment.trim() !== "") {
          setComments([...comments, comment]);
            setComment("");
            setIsCommentOpen(false);
        }
    };


    useEffect(() => {
        const fetchBlogPost = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/posts?id=${id}`);
                if (!response.ok) throw new Error(`Failed to fetch blog post, status: ${response.status}`);
                const data: BlogPost = await response.json();
                setBlog(data);
            } catch (err: any) {
                 console.log(err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogPost();
    }, [id]);
    
    if (isLoading) return <div className="text-center">Loading...</div>;
    if (error) {
        return <div className="text-center">Error: {error}. <Link href="/blogs">Go back to all blogs</Link></div>;
    }
    if (!blog) {
        return <div className="text-center">Blog not found. <Link href="/blogs">Go back to all blogs</Link></div>;
    }


    return (
        <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto">
                <Link href="/blogs" className="text-purple-400 hover:text-purple-300 mb-4 block flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to all blogs
                </Link>
                <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8" key={blog.id}>
                       {blog.image && <img src={blog.image} alt={blog.title}
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg mb-6 object-cover"/>}
                
                    <h1 className="text-4xl text-white font-bold mb-4">{blog?.title}</h1>
                    <p className="text-gray-300 leading-relaxed">{blog.content}</p>

                    {/* Icons Section */}
                    <div className="flex items-center mt-6 space-x-6">
                        <HeartIcon className="h-6 w-6 text-red-500 hover:text-red-400 cursor-pointer" />
                        <PaperAirplaneIcon className="h-6 w-6 text-blue-400 hover:text-blue-300 cursor-pointer" />
                        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-400 hover:text-gray-300 cursor-pointer" />
                    </div>
                </div>
                {/* Add Comment Button */}
                <div className="flex justify-center mt-6">
                    <button onClick={handleAddCommentClick} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300">
                        Add Comment
                    </button>
                </div>
                {/* Comment Section */}
                {isCommentOpen && (
                    <div className="mt-6 p-4 rounded-lg border border-gray-700 bg-gray-700">
                        <h3 className="text-lg text-white font-semibold mb-4">Write your comment</h3>
                        <textarea
                            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                            rows={4}
                            placeholder="Enter your comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            onClick={handleCommentSubmit}
                            className="mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                            Submit Comment
                        </button>
                    </div>
                )}
                <div className="mt-8 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Recent Comments</h3>
                </div>
            </div>
        </div>
    );
}
