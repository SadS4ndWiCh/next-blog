import DefaultLayout from '@layouts/default';
import Link from '@components/Link';
import PostCard from '@components/PostCard'

import { getAllPosts, getPostsSlugs } from 'src/lib';
import { GetStaticProps } from 'next';

import styles from '../styles/pages/Home.module.css';

interface Post {
  slug?: string;
  title?: string;
  date?: string;
  thumbnail?: string;
  content?: string;
  excerpt?: string;
}

interface HomePageProps {
  posts: Post[];
}

export default function Home({ posts }: HomePageProps) {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <h1>Posts</h1>
        
        <main>
          { posts.map((post, i) => (
            <PostCard
              key={i}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              thumbnail={post.thumbnail}
            />
          ))}
        </main>
      </DefaultLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'date', 'excerpt', 'title', 'thumbnail']);

  return {
    props: {
      posts
    }
  }
}