import Image from "next/image"
import Button from "./Button"
import styles from '../styles/MattPreview.module.css';
import Matt from '../public/assets/matt.jpg'

export default function MattPreview() {
  return (
      <section className={styles.mattWrapper}>
     <div className={styles.feature}>
        <div className={styles.imageWrapper}>
          <Image
          className={styles.image}
            src={Matt}
            alt={'Matt Heap, Loveless Studio owner, producer and mix engineer.'}
           />
        </div>
       
     </div>
      <div className={styles.mattContent}>
<h2 className={styles.title}>Hi my name is Matt Heap.</h2> 
    <p className={styles.text}>
          I am the owner, producer and mix engineer at Lovess Studio with over a decade of experience recording music across multiple genres
      from metalcore through to folk music, pop to shoegaze and everything in
       between.
          I put the needs and tastes of each artist before my own and work with
          them to achieve the sound that suits their own original music, adding
          my own spin when requested.
        </p>           <div className={styles.buttons}>
         <Button text={'MORE ABOUT ME'} />   <Button alternate={true} text={'LETS HAVE A CHAT'} /> 
      </div>

        </div>
     </section>
  )
}
