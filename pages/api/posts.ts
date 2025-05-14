// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/lib/dbConnect';
import { Post } from '@/models/Post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      if (id) {
        const post = await Post.findById(id);
        if (post) {
          return res.status(200).json(post);
        } else {
          return res.status(404).json({ message: 'Post not found' });
        }
      } else {
        const posts = await Post.find().sort({ createdAt: -1 });
        return res.status(200).json(posts);
      }
    } catch (err) {
      return res.status(500).json({ message: 'Error fetching posts', error: err });
    }
  }

  if (req.method === 'POST') {
    const { title, image, content } = req.body;

    if (!title || !image || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const newPost = await Post.create({ title, image, content });
      return res.status(201).json(newPost);
    } catch (err) {
      return res.status(500).json({ message: 'Error creating post', error: err });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}





// // pages/api/posts.ts

// let posts: { id: number; title: string; image: string; content: string }[] = [
//     {
//       id: 1,
//       title: 'My First Blog',
//       image: 'https://via.placeholder.com/300',
//       content: 'This is the first blog post.',
//     },
//   ];

//   let nextId = 2;
//   import type { NextApiRequest, NextApiResponse } from 'next';

//   export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'GET') {
//       const { id } = req.query;

//       if (id) {
//         const foundPost = posts.find(post => post.id === Number(id));

//         if (foundPost) {
//           return res.status(200).json(foundPost);
//         } else {
//           return res.status(404).json({ message: 'Post not found' });
//         }
//       } else {
//         return res.status(200).json(posts);
//       }
//     }

//     if (req.method === 'POST') {
//       const { title, image, content } = req.body;

//       if (!title || !image || !content) {
//         return res.status(400).json({ message: 'All fields are required.' });
//       }

//       const newPost = { id: nextId++, title, image, content };
//       posts.push(newPost);
//       return res.status(201).json(newPost);
//     }

//     return res.status(405).json({ message: 'Method not allowed' });
//   }