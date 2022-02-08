import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Header from '../components/Header'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'



export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Loveless Studio | Colne, Lancashire Recording Studio </title>
        <meta name="description" content="Loveless Recording studio in Colne, Lancashire." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Content />
    </div>
  )
}
