import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Loveless Studio | Colne, Lancashire Recording Studio </title>
        <meta
          name="description"
          content="Loveless Recording studio in Colne, Lancashire."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Content />
      <Footer />
    </>
  );
}
