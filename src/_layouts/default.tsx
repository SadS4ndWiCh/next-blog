import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { ReactNode } from 'react';

import styles from '../styles/layout/Default.module.css';

interface DefaultLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function DefaultLayout({ children, title, description }: DefaultLayoutProps) {
  return (
    <main>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
      </Head>
      
      <Header />
        { children }
      <Footer />
    </main>
  )
}