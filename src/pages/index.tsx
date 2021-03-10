import Prismic from '@prismicio/client';
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import { RichText } from 'prismic-reactjs';
import { Client } from '@utils/prismic-configuration';
import formatDate from '@utils/formatDate';

import DefaultLayout from '@layouts/default';
import Link from '@components/Link';
import PostCard from '@components/PostCard'

import { getAllPosts, getPostsSlugs } from 'src/lib';
import { GetStaticProps } from 'next';

import styles from '../styles/pages/Home.module.css';

interface HomePageProps {
  posts: ApiSearchResponse;
}

export default function Home({ posts }: HomePageProps) {
  return (
    <div className={styles.container}>
      <DefaultLayout>
        <h1>Posts</h1>
        
        <main>
          { posts.results.map((post, i) => (
            <PostCard
              key={i}
              title={RichText.asText(post.data.title)}
              excerpt={RichText.asText(post.data.excerpt)}
              slug={post.uid}
              date={post.data.formattedDate}
              thumbnail={post.data.thumbnail.url}
            />
          )) }
        </main>
      </DefaultLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await Client.query(
    Prismic.Predicates.at('document.type', 'article')
  );

  posts.results.map(post => {
    post.data.formattedDate = formatDate(post.data.published_at);
  });

  // const posts = getAllPosts(['slug', 'date', 'excerpt', 'title', 'thumbnail']);

  return {
    props: {
      posts
    }
  }
}