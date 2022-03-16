import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import Nav from './Nav';

export default function NavBar({ inView }) {

  const active = styles.active;
  const hidden = styles.hidden;

  return (
    <div className={!inView ? `${active}` : `${hidden}`}>
      <div className={styles.logo}>
        {' '}
        <Link href="/">
          <a>loveless studio</a>
        </Link>
      </div>

      <Nav />
    </div>
  );
}
