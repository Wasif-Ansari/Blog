
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, image, content }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Blog post added!");
        setTitle("");
        setImage("");
        setContent("");
        router.push("/blogs");
      } else {
        setMessage(data.message || "Failed to add post");
      }
    } catch (error) {
      setMessage("Failed to add post");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md" required />
        </div>
        <div className="mb-4">
          <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md" />
        </div>
        <div className="mb-4">
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded-md" rows={10} required />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Post Blog
        </button>
        <p className="mt-2">{message}</p>
      </form>
    </div>
  );
}


