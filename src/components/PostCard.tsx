import Link from '@components/Link';

import styles from '@styles/components/PostCard.module.css';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;

  thumbnail?: string;
}

export default function PostCard({ title, excerpt, date, slug, thumbnail }: PostCardProps) {
  return (
    <div className={styles.postCardContainer}>
      { thumbnail && (
        <img src={thumbnail} alt={title}/>
      ) }
      <Link to={`/posts/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{excerpt}</p>
    </div>
  )
}