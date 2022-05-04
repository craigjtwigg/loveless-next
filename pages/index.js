import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Home({herosection, mattsection, showreelvideo}) {
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
      <Header hero={herosection}/>

      <Content matt={mattsection} showreelvideo={showreelvideo}/>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query Homepage {
   herosection {
    data {
      attributes {
        header
        subheader
        buttontext
        desktopimage {
          data {
            attributes {
              url
            }
          }
        }
        topmobileimage {
          data {
            attributes {
              url
            }
          }
        }
        bottommobileimage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }      
  mattsection {
    data {
    	attributes {
        header
        homepageintro
        homepageimage {
          data {
            attributes {
              url
              width
              height
            }
          }
        }
          }
        }
      }
  showreelpage {
    data {
      attributes {
        youtubeshowreel
      }
    }
  }    
    }`,
    }),
  });

  const json = await res.json();

  return {
    props: {
      herosection: json.data.herosection.data.attributes,
      showreelvideo: json.data.showreelpage.data.attributes.youtubeshowreel,
      mattsection: json.data.mattsection.data.attributes,
    },
    revalidate: 1,
  };
}