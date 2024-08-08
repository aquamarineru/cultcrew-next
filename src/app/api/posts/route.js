// src/app/api/posts/route.js

import { NextResponse } from 'next/server';
import { client } from '../../lib/client';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const start = searchParams.get('start');
  const end = searchParams.get('end');

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
  }

  try {
    const posts = await loadPosts(Number(start), Number(end));
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

async function loadPosts(start, end) {
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
