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
      <Link to={`/posts/${slug}`}>
        { thumbnail && (
          <img src={thumbnail} alt={title}/>
        ) }
        <div>
          <h2>{title}</h2>
          
          <p>{excerpt}</p>
        </div>
      </Link>
    </div>
  )
}