import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';
import { RichText } from 'prismic-reactjs';
import { Client } from '@utils/prismic-configuration';

import PostLayout from '@layouts/post';
import { getPostBySlug, getPostsSlugs } from '@lib/index';
import { GetStaticPaths, GetStaticProps } from 'next';

import styles from '../../styles/pages/Post.module.css';
import formatDate from '@utils/formatDate';

interface PostPageProps {
  post: Document;
}

export default function Post({ post }: PostPageProps) {
  console.log(post.data.content);

  return (
    <div className={`${styles.postContainer} container`}>
      <PostLayout
        title={RichText.asText(post.data.title)}
        content={post.data.content}
        thumbnail={post.data.thumbnail.url}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  
  const post = await Client.getByUID('article', slug, {
    lang: 'pt-br',
  });

  post.data.formattedDate = formatDate(post.data.published_at);
  
  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await Client.query(
    Prismic.Predicates.at('document.type', 'article'),
  );

  const allBlogPosts = [];

  posts.results.map(post => {
    allBlogPosts.push({ params: { slug: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: false,
  }
}