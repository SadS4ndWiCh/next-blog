import PostLayout from '@layouts/post';
import { getPostBySlug, getPostsSlugs } from '@lib/index';
import { GetStaticPaths, GetStaticProps } from 'next';

import styles from '../../styles/pages/Post.module.css';

interface PostPageProps {
  title?: string;
  date?: string;
  thumbnail?: string;
  content?: string;
  excerpt?: string;
  slug?: string;
}

export default function Post({ title, content, thumbnail }: PostPageProps) {
  return (
    <div className={`${styles.postContainer} container`}>
      <PostLayout
        title={title}
        content={content}
        thumbnail={thumbnail}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug as string;
  
  return {
    props: getPostBySlug(slug, ['title', 'content', 'thumbnail']),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = getPostsSlugs();
  paths = paths.map(post => ({
    params: { slug: post.replace(/\.md$/, '') }
  })) as any;

  return {
    paths,
    fallback: false,
  }
}