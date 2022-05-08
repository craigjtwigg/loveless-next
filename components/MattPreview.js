import Image from "next/image"
import Button from "./Button"
import styles from '../styles/MattPreview.module.css';
import Link from "next/link";

export default function MattPreview({matt}) {
  return (
      <section className={styles.mattWrapper}>
     <div className={styles.feature}>
        <div className={styles.imageWrapper}>
          <Image
          className={styles.image}
          height={matt.homepageimage.data.attributes.height}
          width={matt.homepageimage.data.attributes.width}
            src={matt.homepageimage.data.attributes.url}
            alt={'Matt Heap, Loveless Studio owner, producer and mix engineer.'}
           />
        </div>
       
     </div>
      <div className={styles.mattContent}>
<h2 className={styles.title}>{matt.header}</h2> 
    <p className={styles.text}>
         {matt.homepageintro}
        </p>           <div className={styles.buttons}>
       <Link href="/matt"><a> <Button text={'MORE ABOUT ME'} /> </a></Link>  
      </div>

        </div>
     </section>
  )
}
