import Head from 'next/head';
import Image from 'next/image';
import AudioPlayer from '../components/AudioPlayer';
import Content from '../components/Content';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';
import { useInView } from 'react-intersection-observer'

export default function Home() {



   const { ref, inView } = useInView({
     threshold: 0.2,
   });

  return (
    <div className={styles.container}>
       <NavBar inView={inView}/>
      <Head>
        <title>Loveless Studio | Colne, Lancashire Recording Studio </title>
        <meta
          name="description"
          content="Loveless Recording studio in Colne, Lancashire."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={ref}>
        <Header/>
      </div>
      
<Content />
 
      
     
      </div>
  );
}

