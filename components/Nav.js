import NavTab from './NavTab';
import styles from '../styles/Nav.module.css';

export default function Nav(props) {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <NavTab reference={props.showreelRef} section="SHOWREEL" />
        <NavTab section="GEAR" />
        <NavTab section="TESTIMONIALS" />
        <NavTab section="FAQ" />
      </nav>
    </div>
  );
}
