import { useState } from 'react';
import Youtube from './Youtube';
import styles from '../styles/GearItem.module.css';
import Button from './Button';
import Image from 'next/image';
import Close from '../public/assets/close.svg';


export default function GearItem(props) {
  const [isActive, setIsActive] = useState(false);
  let imageData = props.item.attributes.image.data

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log('hello');
  };
  return (
  <>
    <div className={styles.container} onClick={() => toggleActive()}>
      
      {imageData ? (<div className={styles.imageWrapper}><Image 
      src={imageData.attributes.url}
      alt="blah"
      width={imageData.attributes.width}
      height={imageData.attributes.height}
      objectFit='cover'
      layout='fill'/></div>) : null}
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{props.item.attributes.name}</h3>
        {/* <div className={styles.detailsBtn} onClick={() => toggleActive()}><Button small={true} text={isActive ? 'hide details' : 'show details'}  /></div> */}
        
      </div>

  
    </div>
      <div className={isActive ? styles.visible : styles.hidden}>
        <article className={styles.modal}>
        <h3 className={styles.title}>{props.item.attributes.name}</h3>
          {imageData ? (<div className={styles.modalImageWrapper}><Image 
      src={imageData.attributes.url}
      alt="blah"
      width={imageData.attributes.width}
      height={imageData.attributes.height}
      // objectFit='cover'
      layout='responsive'/></div>) : null}
        <p className={styles.text}>{props.item.attributes.description}</p>
        {props.item.attributes.video && <div className={styles.video}><Youtube youTubeLink={props.item.attributes.video} />
        </div>}
         <div onClick={() => toggleActive()} className={styles.close}>
            <Image src={Close} alt='close modal' />
          </div>
        </article>
      </div>
    </>
  );
}
