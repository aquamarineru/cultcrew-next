import React from 'react';
import { useRouter } from 'next/router';
import { client } from '../../../lib/client';
import styles from './styles.module.scss';

export default function Post({ post, className }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(post);

  return (
    <div className={className || styles.post}>
      <h1>{post.title}</h1>
      <h2>{post.subtitle && post.subtitle.map(block => block.children.map(child => child.text).join(' ')).join(' ')}</h2>
      <img src={post.image.asset.url} alt={post.title} />
      <div>
        <h3>Post Details</h3>
        <p>Date: {post.body.date}</p>
        <p>Time to Read: {post.body.timeToRead}</p>
        <div>
          {post.body.image && <img src={post.body.image.asset.url} alt="Post Image" />}
          <div>
            {post.body.postText && post.body.postText.map(block => (
              block.children.map(child => (
                <p key={child._key}>{child.text}</p>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "post"]`;
  const posts = await client.fetch(query);
  const paths = posts.map(post => ({
    params: { slug: post.slug.current }
  }));

  console.log('Paths:', paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      subtitle,
      image {
        asset-> {
          _id,
          url
        }
      },
      body {
        slug,
        _id,
        date,
        timeToRead,
        image {
          asset-> {
            _id,
            url
          }
        },
        postText[]{
          _key,
          children[]{
            _key,
            text
          }
        }
      }
    }`;

    console.log('Fetching post with slug:', params.slug);

    const post = await client.fetch(query, { slug: params.slug });
    
    console.log('Fetched post:', post);

    if (!post) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
