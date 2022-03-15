import { useState } from 'react';
import Youtube from './Youtube';
import styles from '../styles/GearItem.module.css';
import Button from './Button';

export default function GearItem(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log('hello');
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3>{props.item.name}</h3>
        <div className={styles.detailsBtn} onClick={() => toggleActive()}><Button small={true} text={isActive ? '-' : 'details'}  /></div>
        
      </div>

      <div className={isActive ? styles.visible : styles.hidden}>
        <p>{props.item.description}</p>
        {props.item.video && <div className={styles.video}><Youtube videoId={props.item.video} /></div>}
      </div>
    </div>
  );
}
