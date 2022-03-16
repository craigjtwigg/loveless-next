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

export default function Gear() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

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
                ref={carouselRef}
                enableAutoPlay={false}
                showArrows={true}
                autoPlaySpeed={6000}
                itemsToShow={itemsPerPage}
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
        {/* Guitars

 

Fender Jaguar HH with Bare Knuckle Pickups

Fender Mustang with Seymour Duncan Hot Rail

Fender Japanese Strat with Bare Knuckle Pickups

Squire Bass VI

Tokai Telecaster

Squire Statocaster with Seymour Duncan Invader

Fender Jazz bass w/ Seymour Duncan Quarter Pounders

Martin 000-15M Acoustic

Amps

​

Vox AC30 guitar amp combo

Marshall JCM800 guitar amp head

Marshall JCM900 guitar amp head

Orange Rockerverb 50 guitar amp head

Peavey 6505 guitar amp head

Peavey 5150 guitar amp head

Carlsbro 50 top guitar amp head
Fender Deluxe guitar amp combo

MESA Boogie 4x12 guitar cab
Fender Tonemaster 4x12 cab

Marshall JCM900 4x12 guitar cab

Ampeg PF500 bass head
Custom bass cab with Eminence speakers

Pedals

​

Strymon Big Sky reverb

Stymon Timeline
Walrus Slo reverb

Walrus Descent reverb
JHS Big Cheese fuzz

Empress Tape Delay
Fulltone OCD distortion

J-Rocket Archer overdrive

Fulltone Plimsole distortion
Electro Harmonix Russian Big Muff fuzz 
Electro Harmonix USA Big Muff fuzz
Electro Harmonix Small Clone chorus

Electro Harmonix Small Stone phaser 

Electro Harmonix POG2 octave generator

Electro Harmonix Super Ego + Synth Pedal 

TC Electronics Hall of Fame reverb

TC Electronics Triple delay
TC Electronic Polytune Mini
TC Electronic Sub n Up octave pedal
ZVex Fuzz Factory fuzz
MXR Phase100

MXR micro flanger

MXR Dyna Comp compressor
Ibanez TubeScreamer

Keeley Super Phat Mod distortion

Keeley Compressor Plus 

Blackout Effectors Blunderbuss fuzz

Pro-co RAT distortion

Made By Mike Green Muff fuzz

Boss TR-2 tremelo pedal

Boss DD4 delay
Boss CH1 chorus
Boss CE5 chorus

Boss CS3 compressor

Boss CEB3 bass chorus
Boss SD1 overdrive

Boss ODB-3 Bass overdrive

Digitech Synth Wah

Lots of DIY handmade pedals

...many more pedals

​

Drum Stuff

​

Mapex Black Panther 14x6 maple snare

Mapex Black Panther Chris Adler 12x6 maple snare

Ludwig Black Beauty 14x6 brass snare

Vintage Premier Steel 14 Snare

Vintage 80s Yamaha Stage Classic Mahogony drum kit

Tama Superstar Birch drum kit
Dream Bliss Crash and Ride Cymbals (for hire)
Zildjian A Custom New Beat Hi-Hats (For Hire)

​

Microphones


AKG C414 XLS x 2
Coles 4038 x2

Audio Technica AT4033 x 2
JZ V67 x2

Cascade Fathead w/ Lundahl transformer x2

Warm Audio WA87
SE Electronics R1

Aston Stealth

Shure Sm7B

Beyerdynamic M201

Sennheiser MD421 x2

Rode NT5 x2

Rode NTK

Shure Beta 57

Shure SM58 x2

Shure SM57 x 3
Shure Beta52

Audix D6

AKG D112

 

Monitoring

​

Focal Twin 6 BE Studio Monitors

Yamaha NS10m Studio Monitors

Behritone C5A mono monitor

Beyer dynamic DT770 headphones x2

Beyer Dynamic DT150 headphone

Vic Firth drummer isolation headphones

AKG K701 open back headphones

AKG K77 headphones x2

Tascam MH8 headphone amp
Palmer Monicon monitor controller

 

Outboard and I/O

​

Total of 22 channels via....
RME Fireface 802
Audient ASP 880
Focusrite ISA428
Neve 1073 pre amp x2

Joe Meek VCQ channel strip

CAPI VP 312 pre-amp

Golden Age Project Pre73 pre-amp

TL Audio VP5051 pre-amp

Cranbourne Audio Camden pre-amp

SSL 611 EQ

DBX 560 compressor */}
      </div>
    </>
  );
}
