import NavTab from './NavTab';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <NavTab section="SHOWREEL" />
        <NavTab section="GEAR" />
        <NavTab section="TESTIMONIALS" />
        <NavTab section="FAQ" />
      </nav>
    </div>
  );
}
