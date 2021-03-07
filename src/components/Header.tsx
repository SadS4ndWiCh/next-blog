import Link from "@components/Link";

import styles from '../styles/components/Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/full-logo.svg" alt="Minimalist"/>

            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
              </ul>
            </nav>
        </header>
    )
}