import React from 'react';
import { useRouter } from 'next/router';
import cl from 'classnames';
import { client } from '../../../lib/client';
import styles from './styles.module.scss';
import Image from 'next/image';
import Cover from '@/components/Cover/Cover';
import { format } from "date-fns";

export default function Post({ post, className }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  let date = 'Invalid date';
  if (post.body.date) {
    try {
      date = format(new Date(post.body.date), 'dd/MM/yyyy');
    } catch (error) {
      console.error('Date parsing error:', error);
    }
  }
  console.log(post);

  return (
    <div className={cl(className, styles.post)}>
      <Cover 
        title={post.title}
        subtitle={post.subtitle}
        image={post.image.asset.url}
        date={date}
        timeToRead={post.body.timeToRead}
      />
      <div className={cl(className, styles.postBody)}>
          {post.body.image && (
          <Image
            src={post.body.image.asset.url}
            alt="Post Image"
            width={300}
            height={300}
            className={styles.postBodyImg}
          />
        )}
        <div className={cl(className, styles.postBodyText)}>
          {post.body.postText &&
            post.body.postText.map((block) =>
              block.children.map((child) => (
                <p key={child._key}>{child.text}</p>
              ))
            )}
          </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "post"]{slug}`;
  const posts = await client.fetch(query);
  const paths = posts
  .filter(post => post.slug && post.slug.current) 
  .map(post => ({
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
      slug,
      body {
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
