import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      image: '/vercel.svg',
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      title: 'Blog Post 2',
      image: '/next.svg',
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      title: 'Blog Post 3',
      image: '/globe.svg',
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      title: 'Blog Post 1',
      image: '/vercel.svg',
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      title: 'Blog Post 2',
      image: '/next.svg',
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
    {
      title: 'Blog Post 3',
      image: '/globe.svg',
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    },
  ];

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from Next.js!</title>
      </head>
      <body>
        <h1>Hello from Next.js!</h1>
        <ul>
          ${blogPosts
            .map(
              (post) => `
            <li>
              <h2>${post.title}</h2>
              <img src="${post.image}" alt="${post.title}" width="50" height="50"/>
              <p>${post.text}</p>
            </li>
          `
            )
            .join('')}
        </ul>
      </body>
    </html>
  `;

  // res.setHeader('Content-Type', 'text/html');
  // res.status(200).send(html);
  res.status(200).json(blogPosts);
  // message:"Hello from api!", note:"this is note", time:new Date()}

}