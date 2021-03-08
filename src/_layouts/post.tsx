import Head from 'next/head';
import DefaultLayout from '@layouts/default';
import Link from '@components/Link';

import styles from '@styles/layout/Post.module.css';

interface PostLayoutProps {
  title: string;
  content: string;
  thumbnail?: string;
}

export default function PostLayout({ title, content, thumbnail }: PostLayoutProps) {
  return (
    <DefaultLayout>
      <Head>
        <title>{ title }</title>
      </Head>
      <article className={styles.postContainer}>
        <header>
          { thumbnail && (
            <img src={thumbnail} alt={title}/>
          ) }

          <h1>{ title }</h1>
        </header>
        
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </DefaultLayout>
  )
}
