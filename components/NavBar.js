import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Menu from '../public/assets/menu.svg';
import Close from '../public/assets/close.svg';
import { useState } from 'react';
import Image from 'next/image';

export default function NavBar() {
  const active = styles.active;
  const hidden = styles.hidden;
  const activeMobileBar = styles.activeMobileBar

  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className={isActive ? activeMobileBar : active}>
      <div className={styles.logo}>
        {' '}
        <Link href="/">
          <a>loveless studio</a>
        </Link>
      </div>
      <div className={styles.desktopNav}>
        <Nav />
      </div>
      <div onClick={() => toggleNav()} className={styles.mobileNavToggle}>
        {isActive ? (
          <Image
            className={styles.icon}
            src={Close}
            alt="Close navigation menu"
          />
        ) : (
          <Image
            className={styles.icon}
            src={Menu}
            alt="Open navigation menu"
          />
        )}
      </div>
     
    </div>
     <div className={styles.mobileNav}>
        
        <NavMobile isActive={isActive}/>
        
        </div>
        </>
  );
}
