import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        console.log('Received blog post:', req.body);
        res.status(200).json({ message: 'Blog post received' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });

    }
}
