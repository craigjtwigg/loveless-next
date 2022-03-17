import styles from '../styles/404.module.css';
import Link from 'next/link';

export default function Page404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oops, the page you are looking for isnt here!
      </p>
<Link href="/"><a className={styles.return}>return to loveless studio</a></Link>
    </div>
  );
}
