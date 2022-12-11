import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>Contact</a>
        </Link>
        <Link href="/login">
          <a className={styles.navLink}>Login</a>
        </Link>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
