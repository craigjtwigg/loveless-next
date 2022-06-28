import styles from '../styles/Gear.module.css';
import SEO from '../components/SEO';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import GearCategory from '../components/GearCategory';
import GearCategoryCard from '../components/GearCategoryCard';
import AmpRack from '../public/assets/AmpRack.jpg';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Gear({ gear, header, subheader, headerimage, seo }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 810, itemsToShow: 4 },
  ];

  const itemsPerPage = 4;

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(7 / itemsPerPage);
  let resetTimeout;

  
  return (
    <>
      <SEO seo={seo} />

      <NavBar inView={inView} />

      <div className={styles.container}>
        <>
          <div className={styles.header}>
            <Image
              height={headerimage.attributes.height}
              width={headerimage.attributes.width}
              priority="true"
              layout="responsive"
              className={styles.headerImage}
              src={headerimage.attributes.url}
              alt="Industry standard equipment at Loveless Studio"
            />
          </div>
          <div className={styles.hero}>
            <h1 className={styles.title}>{header}</h1>
            <p className={styles.text}>{subheader}</p>
            {/* <div className={styles.cards}>
              <Carousel
                breakPoints={breakPoints}
                ref={carouselRef}
                enableAutoPlay={false}
                showArrows={true}
                autoPlaySpeed={6000}
                onNextEnd={({ index }) => {
                  if (index + 1 === totalPages) {
                    if (carouselRef?.current?.goTo) {
                      resetTimeout = setTimeout(() => {
                        if (carouselRef?.current?.goTo) {
                          carouselRef.current.goTo(0);
                        }
                      }, 6000);
                    }
                  }
                }}
              >
                <GearCategoryCard category="guitar" />
                <GearCategoryCard category="monitoring" />
                <GearCategoryCard category="outboard" />
              </Carousel>
            </div> */}
          </div>
        </>
        <div className={styles.listContainer}>
          <GearCategory gear={gear} category="guitar" />
          <GearCategory gear={gear} category="pedal" alt={true} />
          <GearCategory gear={gear} category="amp" />
          <GearCategory gear={gear} category="drum" alt={true} />
          <GearCategory gear={gear} category="microphone" />
          <GearCategory gear={gear} category="monitoring" alt={true} />
          <GearCategory gear={gear} category="outboard" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://salty-plateau-21551.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query Gear {
  gears {
    data {
      attributes {
        name
        category
        description
        video
      }
    }
  }
  gearpage {
    data {
      attributes {
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
        header
        subheader
        headerimage {
          data {
            attributes {
              height
              width
              url
            }
          }
        }
      }
    }
  }
}`,
    }),
  });

  const json = await res.json();

  return {
    props: {
      gear: json.data.gears.data,
      headerimage: json.data.gearpage.data.attributes.headerimage.data,
      header: json.data.gearpage.data.attributes.header,
      subheader: json.data.gearpage.data.attributes.subheader,
      seo: json.data.gearpage.data.attributes.seo[0],
    },
    revalidate: 1,
  };
}
