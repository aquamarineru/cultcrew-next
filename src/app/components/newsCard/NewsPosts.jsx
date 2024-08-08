"use client";

import React, { useState } from 'react';
import cl from 'classnames';
import styles from './styles.module.scss';
import NewsCard from './NewsCard';

export default function NewsPosts({ initialPosts = [], total = 0, className }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(initialPosts.length);
  const [loading, setLoading] = useState(false);

  const isLoadButtonVisible = loadedAmount < total;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + 4}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setLoadedAmount(prevAmount => prevAmount + data.posts.length);
      setPosts(prevPosts => [...prevPosts, ...data.posts]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div  className={cl(className, styles.news)}>
      <div className={cl(className, styles.newsCards)}>
        {posts.length > 0 ? (
          posts.map(post => (
            post.slug?.current ? ( 
              <NewsCard
                key={post._id}
                title={post.title}
                subtitle={post.subtitle}
                image={post.image}
                slug={`${post.slug.current}`}
              />
            ) : (
              <div key={post._id}>Missing slug</div>
            )
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
      {isLoadButtonVisible && (
        <div className={cl(className, styles.newsButton)}>
          <button
            onClick={getMorePosts}
            disabled={loading}
            aria-label="Mehr anzeigen"
            className={cl(className, styles.newsBtn)}
          >
            {loading ? 'Laden ...' : 'Mehr anzeigen'}
          </button>
        </div>
      )}
    </div>
  );
}
