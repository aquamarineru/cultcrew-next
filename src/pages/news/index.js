import React, {useState} from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { loadPosts } from '../api/posts';
import Card from '@/components/Card/Card';

const LOAD_MORE = 3;
export default function News({className, initialPosts, total}) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE);
  const [loading, setLoading] = useState(false);

  const isLoadButtonVisible = loadedAmount < total;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE}`).then(res => res.json());
      setLoadedAmount(prevAmount => prevAmount + LOAD_MORE);
      setPosts(prevPosts => [...prevPosts, ...data.posts]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={cl(className, styles.news)}>
      <div className={cl(className, styles.newsCards)}>
        {posts.map(post => (
          <Card
            key={post._id}
            title={post.title}
            subtitle={post.subtitle}
            image={post.image}
            link={post.slug.current}
          />
        ))}
      </div>
      <div className={cl(className, styles.newsButton)}>
        {isLoadButtonVisible && (
            <button className={cl(className, styles.newsBtn)} onClick={getMorePosts} disabled={loading} aria-label="Mehr anzeigen">
              {loading ? 'Laden ...' : 'Mehr anzeigen'}
            </button>
          )}

      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const { posts, total } = await loadPosts(0, 3); 
    return {
      props: {
        initialPosts: posts,
        total,
      },
      revalidate: 60, 
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        initialPosts: [],
        total: 0,
      },
    };
  }
}