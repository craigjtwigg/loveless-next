import styles from '../styles/Gear.module.css';
import { gearData } from '../data';
import { useInView } from 'react-intersection-observer';
import NavBar from '../components/NavBar';
import GearCategory from '../components/GearCategory';
import GearCategoryCard from '../components/GearCategoryCard';
import AmpRack from '../public/assets/AmpRack.jpg';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';
import Footer from '../components/Footer';

export default function Gear() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 810, itemsToShow: 4}
  ]

  const itemsPerPage = 4;

  const carouselRef = useRef(null);
  const totalPages = Math.ceil(7 / itemsPerPage);
  let resetTimeout;

  return (
    <>
      <NavBar inView={inView} />

      <div className={styles.container}>
        <>
          <div className={styles.header}>
            <Image
              height={2000}
              width={3000}
              priority="true"
              layout="responsive"
              className={styles.headerImage}
              src={AmpRack}
              alt="Industry standard equipment at Loveless Studio"
            />
          </div>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              We have everything here to bring your music to life
            </h1>
            <p className={styles.text}>
              {' '}
              Loveless Studio is kitted out with a wide range of carefully
              curated boutique and industry standard instruments, amplifiers,
              pedals, drums and the highest quality recording equiptment.
            </p>
            <div className={styles.cards}>
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
                <GearCategoryCard category="guitars & basses" />
                <GearCategoryCard category="pedals" />
                <GearCategoryCard category="amps & cabs" />
                <GearCategoryCard category="drums" />
                <GearCategoryCard category="microphones" />
                <GearCategoryCard category="monitoring" />
                <GearCategoryCard category="outboard & i/o" />
              </Carousel>
            </div>
          </div>
        </>
        <div className={styles.listContainer}>
        <GearCategory category="guitars & basses" />
        <GearCategory category="pedals" alt={true}/>
        <GearCategory category="amps & cabs" />
        <GearCategory category="drums" alt={true}/>
        <GearCategory category="microphones" />
        <GearCategory category="monitoring" alt={true}/>
        <GearCategory category="outboard & i/o" />
</div>

      </div>
<Footer />
    </>
  );
}
