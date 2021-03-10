import Head from 'next/head';
import DefaultLayout from '@layouts/default';
import Link from '@components/Link';

import styles from '@styles/layout/Post.module.css';
import { ReactNode } from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

interface PostLayoutProps {
  title: string;
  content: RichTextBlock[];
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
        
        <main>
          { RichText.render(content) }
        </main>
      </article>
    </DefaultLayout>
  )
}
