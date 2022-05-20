import SEO from '../components/SEO';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function Home({
  labellogos,
  labels,
  overview,
  reviews,
  seo,
  herosection,
  mattsection,
  showreelvideo,
  mapsection,
}) 
{
  console.log(labellogos)
  return (
    <>
      <SEO seo={seo} />
      <NavBar />
      <Header hero={herosection} />

      <Content
        overview={overview}
        labels={labels}
        labellogos={labellogos}
        matt={mattsection}
        showreelvideo={showreelvideo}
        reviews={reviews}
        mapsection={mapsection}
      />
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
        homepage {
          data {
            attributes {
              overview
              seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                width
                height
                url
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
            image {
              data {
                attributes {
                  width
                  height
                  url
                }
              }
            }
          }
        }
            }
          }
        }
          reviews {
          data {
            attributes {
              featured
              author
              review
              rating
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
                }
              }
            }
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
  labelsAndRadio {
    data {
      attributes {
        header
        text
        logos{
          data {
            attributes{
              url
              alternativeText
              height
              width
            }
          }
        }
      }
    }
  }
  mapSection {
  data {
    attributes {
      header
      subheader
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
      seo: json.data.homepage.data.attributes.seo,
      reviews: json.data.reviews.data.filter(
        (review) => review.attributes.featured
      ),
      overview: json.data.homepage.data.attributes.overview,
      labels: json.data.labelsAndRadio.data.attributes,
      labellogos: json.data.labelsAndRadio.data.attributes.logos.data,
      mapsection: json.data.mapSection.data.attributes,
    },
    revalidate: 1,
  };
}
