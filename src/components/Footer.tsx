import styles from '@styles/components/Footer.module.css';
import Link from './Link';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
          <div>
            <img src="/full-logo.svg" alt="Minimalista Logo"/>

            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
          </div>
     
          <p>&copy; 2021 | <strong>Blog Minimalist</strong></p>
        </footer>
    )
}