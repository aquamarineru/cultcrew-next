import { client } from './client';

export async function loadInitialPosts(start, end) {
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
