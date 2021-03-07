import PostLayout from '@layouts/post';
import { getPostBySlug, getAllPosts } from '@api';
import { GetStaticPaths, GetStaticProps } from 'next';

import styles from '../../styles/pages/Post.module.css';

interface PostPageProps {
  title: string;
  content: string;
}

export default function Post({ title, content }: PostPageProps) {
  return (
    <div className={`${styles.postContainer} container`}>
      <PostLayout title={title} content={content} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug as string;
  
  return {
    props: await getPostBySlug(slug),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = await getAllPosts();
  paths = paths.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false,
  }
}