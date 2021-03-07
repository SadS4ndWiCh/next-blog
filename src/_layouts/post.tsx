import Head from 'next/head';
import DefaultLayout from '@layouts/default';
import Link from '@components/Link';

interface PostLayoutProps {
  title: string;
  content: any;
}

export default function PostLayout({ title, content }: PostLayoutProps) {
  return (
    <DefaultLayout>
      <Head>
        <title>{ title }</title>
      </Head>
      <article>
        <h1>{ title }</h1>
        
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <div>
          <Link to='/'>Home</Link>
        </div>
      </article>
    </DefaultLayout>
  )
}
