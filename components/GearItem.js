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
        <h3 className={styles.title}>{props.item.attributes.name}</h3>
        <div className={styles.detailsBtn} onClick={() => toggleActive()}><Button small={true} text={isActive ? 'hide details' : 'show details'}  /></div>
        
      </div>

      <div className={isActive ? styles.visible : styles.hidden}>
        <p className={styles.text}>{props.item.attributes.description}</p>
        {props.item.attributes.video && <div className={styles.video}><Youtube youTubeLink={props.item.attributes.video} /></div>}
      </div>
    </div>
  );
}
