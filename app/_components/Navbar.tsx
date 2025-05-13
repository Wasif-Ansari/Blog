"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-black text-white border-b border-gray-700">
      <Link href="/" className="font-bold text-xl text-white glow-text">LOGO</Link>
        <div className='flex items-center justify-center gap-6 grow'>
        <Link
                href="/"
                className='px-3 py-2 rounded hover:bg-gray-700 cursor-pointer'
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className='px-3 py-2 rounded hover:bg-gray-700 cursor-pointer'
              >
                Blogs
              </Link>
              <Link href="/create" className='px-3 py-2 rounded hover:bg-gray-700 cursor-pointer'>Create</Link>
        </div>
      <div className="flex items-center justify-end">
        {isLoggedIn ? (<Image src="/vercel.svg" alt="User Profile" width={40} height={40} className="rounded-full cursor-pointer hover:opacity-80" />) : (<button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-300 cursor-pointer">Sign In</button>)}
        </div>
    </div>
  );
}
        