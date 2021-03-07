import DefaultLayout from '@layouts/default';
import Link from '@components/Link';

import { getConfig, getAllPosts } from '@api';
import { GetStaticProps } from 'next';

import styles from '../styles/pages/Home.module.css';

interface Post {
  slug: string;
  title: string;
}

interface HomePageProps {
  posts: Post[];
  title: string;
  description: string;
}

export default function Home({ posts, title, description }: HomePageProps) {
  return (
    <div className={styles.container}>
      <DefaultLayout title={title} description={description}>
        <p>List of posts</p>
        <ul>
          { posts.map((post, i) => (
            <li key={i}>
              <Link to={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </DefaultLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig();
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    }
  }
}