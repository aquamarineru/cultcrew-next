// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../../lib/client";

export async function loadPosts(start, end) {
  const query = `*[_type == "post"] | order(publishedAt desc) [${start}...${end}]{
    _id,
    title,
    subtitle,
    image,
    slug,
    body{
      date,
      timeToRead,
      image,
      postText,
    }
  }`;

  const posts = await client.fetch(query);
  const total = await client.fetch(`count(*[_type == "post"])`);
  return { posts, total };
}

export default async function posts(req, res) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).json({ error: 'Invalid query' });
  }

  try {
    const { posts, total } = await loadPosts(start, end);
    res.status(200).json({ posts, total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}