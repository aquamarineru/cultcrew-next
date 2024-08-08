
import { loadInitialPosts } from '../lib/loadInitialPosts';
import NewsPosts from '../components/newsCard/NewsPosts';

export const revalidate = 60; 

export default async function NewsPage() {
  const { posts, total } = await loadInitialPosts(0, 4);

  return (
    <NewsPosts initialPosts={posts} total={total} />
  );
}
