import styles from '../styles/FaqCard.module.css';
import { useState } from 'react';
import Button from './Button';

export default function FaqCard(props) {
  const [isActive, setIsActive] = useState(false)

  const toggleActive = () => {
    setIsActive(!isActive)
    console.log('hello')
  }
  return (
    <div className={styles.container}>
      <div className={styles.questionWrapper}>
        <div className={styles.question}>
           {props.question}
        </div>
        <div className={styles.buttonWrapper} onClick={()=> toggleActive()}>
        <Button  small={true} text={!isActive ? 'see answer' : 'hide answer'}  />
        </div>
        </div>
      <div className={isActive ? styles.answer : styles.hidden}>{props.answer}</div>
    </div>
  );
}
